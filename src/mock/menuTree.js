import React from 'react'
import {
    HomeOutlined,
    PieChartOutlined,
    AliwangwangOutlined, 
    ShoppingCartOutlined,
    CarryOutOutlined
  } from "@ant-design/icons";

let menuTree = [
    {
        key:'0',
        icon:<HomeOutlined/>,
        text:'Page1',
        path:'',
        children:[
            {
                key:'1',
                icon:<PieChartOutlined/>,
                text:'Page1-1',
                path:'',
                children:[
                    {
                        key:'2',
                        icon:<AliwangwangOutlined/>,
                        text:'Page1-1-1',
                        path:'/Page1',
                    }
                ],
            },
            {
                key:'3',
                icon:<HomeOutlined/>,
                text:'Page2',
                path:'/Page2',
                children:[],
            },
        ],
    },
    {
        key:'5',
        icon:<CarryOutOutlined/>,
        text:'Page3',
        path:'',
        children:[
            {
                key:'6',
                icon:<HomeOutlined/>,
                text:'Page3-3',
                path:'/Page3',
                children:[],
            },
        ],
    },
    {
        key:'7',
        icon:<CarryOutOutlined/>,
        text:'todolist',
        path:'',
        children:[
            {
                key:'8',
                icon:<HomeOutlined/>,
                text:'TodoList',
                path:'/TodoList',
                children:[],
            },{
                key:'9',
                icon:<HomeOutlined/>,
                text:'List',
                path:'/List',
                children:[],
            },
        ],
    }
]


export { menuTree };