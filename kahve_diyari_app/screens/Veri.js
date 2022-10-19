import React ,{useEffect, useState} from "react";
import { Text, View, StyleSheet, SafeAreaView,FlatList,ActivityIndicator } from "react-native";


const movieURL ="https://reactnative.dev/movies.json"


const Veri = () => {
    
    const [isloading,setIsLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(()=> {
        fetch(movieURL)
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => alert(error))
        .finally(setIsLoading(false));
    },[]);
    
    return (
    <View style = {{flex: 1 }}>
        {isloading ? (<Text> Loading... </Text> ): 
        (data.map((movie)=>(
            <View>
                <Text style ={{color: "black",fontSize: 30,fontWeight: "bold"}}> {movie.title}</Text>
                <Text style ={{color: "black",fontSize: 20}}> {movie.releaseYear}</Text>
            </View>
        )))
       /*(<FlatList
        data={data}
        keyExtractor={({id},index) => id}
        renderItem= {({item})=>(
                <Text style ={{color: "black"}}>
                    {item.title}
                    {item.releaseYear}
                </Text>
        )}
        />
        )*/
        }
    </View>
    )
}

    
export default Veri;

