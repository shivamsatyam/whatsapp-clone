const ref = firebase.firestore().collection('board').doc(id)
ref.get().then((doc)=>{
	if (doc.exists)
})


const update = firebase.firestore().collection('board').doc(id)
update.set({
	title:"",
	....,
})


firebase.firestore().collection('board').doc(id).delete().then()



