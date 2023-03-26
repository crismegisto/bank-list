import React from 'react';
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native';
import { useGetAllBanksQuery } from 'services/bank';
import { ListKeyExtractor } from 'interfaces/global';
import { Bank } from 'interfaces/bank';
import BankCard from 'components/BankCard';

function App() {
  const { data } = useGetAllBanksQuery(null);

  const renderItem: ListRenderItem<Bank> = ({ item }) => <BankCard {...item} />;

  const keyExtractor: ListKeyExtractor<Bank> = (_, index) => String(index);

  return (
    <SafeAreaView>
      <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={data} />
    </SafeAreaView>
  );
}

export default App;
