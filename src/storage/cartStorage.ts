import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { IBookProps } from 'src/@types/IBookProps';
import { ICartProps } from 'src/@types/ICartProps';

const CART_COLLECTION = '@bookz:cart';

export async function cartGetAll() {
  try {
    const storage = await AsyncStorage.getItem(CART_COLLECTION);
    const cat: ICartProps[] = storage ? JSON.parse(storage) : [];

    return cat;
  } catch (error) {
    Alert.alert('Opa', 'Não foi possível obter o histórico.');

    return [];
  }
}

export async function cartAdd(newItem: IBookProps) {
  try {
    const response = await cartGetAll();
    const storedCart = response ? response : [];
    const index = storedCart.findIndex((i) => i.id === newItem.id);

    if(index === -1) {
      const updatedCart = [...storedCart, { ...newItem, quantity: 1 }];

      await AsyncStorage.setItem(
        CART_COLLECTION,
        JSON.stringify(updatedCart)
      );
    }else {
      const updatedCart = [...storedCart];

      updatedCart[index].quantity += 1;

      await AsyncStorage.setItem(
        CART_COLLECTION,
        JSON.stringify(updatedCart)
      );
    }
  } catch (error) {
    console.log("Failed to add item to cart",error);
  }
}

export async function cartRemove(id: string) {
  try {
    const storage = await cartGetAll();

    const filtered = storage.filter(itemCart => itemCart.id !== id);
    const itens = JSON.stringify(filtered);

    await AsyncStorage.setItem(CART_COLLECTION, itens);
  } catch (error) {
    console.error("Failed to remove item from cart", error);
  }
}

export async function clearCart() {
  try {
    await AsyncStorage.removeItem(CART_COLLECTION);
  } catch (error) {
    console.error("Failed to clear cart", error);
    
  }
}

export async function cartRemoveQuantity(id: string) {
  try {
    const response = await cartGetAll();
    const storedCart = response ? response : [];
    const index = storedCart.findIndex((i) => i.id === id);

    const updatedCart = [...storedCart];

    if(updatedCart[index].quantity === 1) {
      cartRemove(id);
    }else {
      updatedCart[index].quantity -= 1;

      await AsyncStorage.setItem(
        CART_COLLECTION,
        JSON.stringify(updatedCart)
      );
    }

    
  } catch (error) {
    console.log(error);
  }
}