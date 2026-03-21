import { View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangedhandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onchangetext: amountChangedhandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false,
          // autoCapitalize: 'sentences'
        }}
      />
    </View>
  );
}

export default ExpenseForm;
