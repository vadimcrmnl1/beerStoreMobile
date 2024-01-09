import {FC} from "react";
import {Text, TouchableOpacity} from "react-native";
import {cartStyles} from "../../../../styles/styles";

type ModalButtonPropsType = {
    title: string
    color?: string
    backgroundColor?: string
    onPress: () => void
}
export const ModalButton: FC<ModalButtonPropsType> = ({title, color, backgroundColor, onPress}) => {
    return (
        <TouchableOpacity style={[cartStyles.emptyCartButton, {width: '100%'}]} onPress={onPress}>
            <Text style={{textTransform: 'uppercase', fontWeight: '400', fontSize: 30, color: '#fff'}}>{title}</Text>
        </TouchableOpacity>
    )
}
