import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image 
        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcPNfHn4bK0OG8a781aewxOv6_QHJA7rJXA&s"}}
        style={{width: 200, height: 300}}
      >
      </Image>
      <Text style={{fontStyle: "italic"}}>Texto em italico</Text>


      <Link href={"/ItemPage/itemPage"}>
        <Text>Ir para pagina do item</Text>
      </Link>
    </View>
  );
}
