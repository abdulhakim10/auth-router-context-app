/*
-----------------------------
Basic context API setup
-----------------------------
1. Context API: Share auth state with other components(across the application)
2. Create an UserContext
3. ContextProvider with passed children
4. Set the UserContext in the index.js
5. To consume the context: export the AuthContext from UserContext
6. Now at Header or anywhere else: use useContext hook to get the in the context
*/


/* 
---------------------
Auth Integration
---------------------
1. Use getAuth by passing the app from firebase config
2. Created a function named createUser to return createUserWithEmailAndPassword
*/