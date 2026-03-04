import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Achados & <Text style={styles.tituloDestaque}>Perdidos</Text></Text>
      <Text style={styles.subtitulo}>SENAI - Ricardo Lerner -12 itens ativos</Text>

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.tabAtiva]}>
          <Text style={styles.tabTextoAtivo}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTexto}>Perdidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTexto}>Encontrados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTexto}>Retirados</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>

        <View style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.icone}>🎒</Text>
            <View>
              <Text style={styles.itemTitulo}>Mochila preta Adidas</Text>
              <Text style={styles.itemSub}>Quadra de esportes</Text>
            </View>
          </View>

          <View style={styles.status}>
            <Text style={styles.perdido}>PERDIDO</Text>
            <Text style={styles.tempo}>hoje</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.icone}>🔑</Text>
            <View>
              <Text style={styles.itemTitulo}>Chaveiro com chave</Text>
              <Text style={styles.itemSub}>Biblioteca</Text>
            </View>
          </View>

          <View style={styles.status}>
            <Text style={styles.encontrado}>ENCONTRADO</Text>
            <Text style={styles.tempo}>hoje</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.info}>
            <Text style={styles.icone}>🎧</Text>
            <View>
              <Text style={styles.itemTitulo}>Fone de ouvido JBL</Text>
              <Text style={styles.itemSub}>Sala 12</Text>
            </View>
          </View>

          <View style={styles.status}>
            <Text style={styles.perdido}>PERDIDO</Text>
            <Text style={styles.tempo}>ontem</Text>
          </View>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    tituloDestaque: {
    color: "#d81a1a",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F1ED",
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "gray",
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    marginBottom: 20,
    flexWrap: "wrap",
  },

  tab: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  tabAtiva: {
    backgroundColor: "#000000",
  },

  tabTexto: {
    color: "#000000",
  },

  tabTextoAtivo: {
    color: "#ffffff",
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
  },

  icone: {
    fontSize: 24,
    marginRight: 10,
  },

  itemTitulo: {
    fontWeight: "bold",
  },

  itemSub: {
    color: "#888888",
    fontSize: 12,
  },

  status: {
    alignItems: "flex-end",
  },

  perdido: {
    color: "#FF0000",
    fontWeight: "bold",
    fontSize: 12,
  },

  encontrado: {
    color: "#008000",
    fontWeight: "bold",
    fontSize: 12,
  },

  tempo: {
    fontSize: 11,
    color: "#888888",
  },
});