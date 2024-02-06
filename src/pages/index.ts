import Calculate from "./Calculate";

export default [
    {
       component:Calculate,
       routeName:"calculate"
    },
    {
        component:Calculate,
        routeName:"clculate"
     },
     {
        component:Calculate,
        routeName:"calulate"
     }
];

export interface ComponentDefinition {
   component: React.ComponentType<any>; // Type for React component
   routeName: string; // Route name for the component
 };
 