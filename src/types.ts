import {Loja} from './@types/loja';

export type RootStackParamList = {
    Home: undefined;
    Detalhes: {loja: Loja};
};