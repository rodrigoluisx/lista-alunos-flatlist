import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Aluno = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

const aluno1 = { nome: 'Ana', idade: 10, turma: '22', nota1: 10, nota2: 8 };
const aluno2 = { nome: 'Carlos', idade: 11, turma: '22', nota1: 7, nota2: 6 };
const aluno3 = { nome: 'Cláudio', idade: 10, turma: '23', nota1: 7.5, nota2: 9 };
const aluno4 = { nome: 'Renato', idade: 11, turma: '23', nota1: 6, nota2: 5 };

const lista: Aluno[] = [aluno1, aluno2, aluno3, aluno4];

function CardAluno({ aluno }: { aluno: Aluno }) {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  const aprovado = media >= 7;

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{aluno.nome}</Text>
      <Text>Idade: {aluno.idade} anos</Text>
      <Text>Turma: {aluno.turma}</Text>
      <Text>Nota 1: {aluno.nota1}</Text>
      <Text>Nota 2: {aluno.nota2}</Text>
      <Text style={styles.media}>Média final: {media.toFixed(1).replace('.', ',')}</Text>
      <Text style={[styles.status, aprovado ? styles.aprovado : styles.reprovado]}>
        {aprovado ? 'Aprovado' : 'Reprovado'}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de alunos</Text>
      <FlatList
        data={lista}
        keyExtractor={(aluno) => aluno.nome}
        renderItem={({ item }) => <CardAluno aluno={item} />}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    paddingTop: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    gap: 5,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  media: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  status: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  },
  aprovado: {
    color: '#16803c',
  },
  reprovado: {
    color: '#c62828',
  },
});
