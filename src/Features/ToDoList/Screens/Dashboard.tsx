import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from '../../../Commons/Components/CustomHeader';
import {fetchUser} from '../../../Commons/Redux/action'
import styles from './styles';

interface Iprops {
    userList: any;
    navigation:any;
    fetchUser:any;
    users:any;
    products:any;
    
}


 class Dashboard extends Component<Iprops> {

    constructor(props: Iprops) {
        super(props)

    }
    componentWillMount() {

         this.props.fetchUser();
    }
    itemSeparator = () => {
        return (
            <View style={styles.itemSeparator} />
        );
    };
   
    render(){
        return(
                 <View style={styles.MainContainer}>
                   <CustomHeader
          visibleRight={true}
          title="Dashboard"
          goBack={false}
          navigation={this.props.navigation}
        />
        <FlatList
          data={this.props.users}
          ItemSeparatorComponent={this.itemSeparator}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
              return (
            
                      <View >
                      <Text style={styles.textView}>ID: {item.id}</Text>
                       <Text style={styles.textSubView}>{item.name}</Text>
                       <Text style={styles.textSubView}>{item.email}</Text>
                       <Text style={styles.textSubView}>{item.phoneNo}</Text>
                      </View>
              )
          }}
        />
      </View>
        )
    }
    
}


const mapStateToProps=(state:any)=>{
    return {users:state.users}
}

const mapStateToDispatch={
    fetchUser
}


export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);