import AutProvider from "../Rutas/AutProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { insertNewCategory, getCategories, updateCategory, deleteCategory } from "../../Firebase/Firebase";
import Category from '../Category'
import MenuWapper from "../MenuWapper";

export default function DasboardView() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);

  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);



  /* Estas son las validaciones dl formulario */
   async  function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
    const resCategories = await getCategories(user.uid);
    setCategories([...resCategories]);
  }
  function handleonUserNotRegistered(user) {
    navigate('/login')

  }

  function handleonUserNotloggedIn() {
    navigate('/login');
  }

  if (state === 0) {
    return (
      <AutProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotloggedIn={handleonUserNotloggedIn}
        onUserNotRegistered={handleonUserNotRegistered}
      >
      </AutProvider>
    );
  }


  /* Aqui comienzan las funciones para el formulario */


  function handleOnSubmit(e) {
    e.preventDefault();
    addCategory();
  }

  function addCategory() {
    if (title !== '' && order !== '') {
      const newCategory = {
        id: uuidv4(),
        title: title,
        order: order,
        description: description,
        uid: currentUser.uid,
      };
      const res = insertNewCategory(newCategory);
      newCategory.docId = res.id;
      setTitle('');
      setOrder('');
      setDescription('');
      setCategories([...categories,  newCategory]);
    }
  }

  function handleOnChange(e) {
    const value = e.target.value;
    if (e.target.name === 'order') {
      setOrder(value);
    }
    if (e.target.name === 'title') {
      setTitle(value);
    }
    if (e.target.name === 'description') {
      setDescription(value);
    }
  }

  /* Funcion para actualizar las Categorias */
  async function handlerUpdataCategory(docId, title, order, description) {
    const category = categories.find(item => item.docId === docId);
    category.docId = docId;
    category.title = title;
    category.order = order;
    category.description = description;
    await updateCategory(docId, category);
  }

  /* Funcion para eliminar */
  async function handlerDeleteCategory(docId) {
    await deleteCategory(docId);
    const tmp = categories.filter(category => category.docId !== docId);
    setCategories([...tmp]);
  }

  return (
    <MenuWapper>

      <div className="container margin_60 " >
        <section id="section-2">
          <div className="container">
            {/* Aqyi esta la descripcion general */}
            <div className="indent_title_in">
              <i className="icon_document_alt"></i>
              <h3>Editar la dista de tu menu</h3>
              <p>En esta seccion podras crear el nenu que necesitas</p>
            </div>


            {/* input para agregar categoria */}
            <form action="" onSubmit={handleOnSubmit}>
              <label htmlFor="title">Crea una Categoria a tu menu</label>

              <div className="input-group mb-3" >

                <input
                  type="number"
                  name="order"
                  className="form-control"
                  placeholder="orden"
                  onChange={handleOnChange}
                />

                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Ej. Platos fuertes"
                  onChange={handleOnChange}
                />

                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Pequeña description"
                  onChange={handleOnChange}
                />

                {/* input para enviar formulario */}
                <input
                  type="submit"
                  value="Crear Categoria"
                  className="btn btn-outline-primary"
                />
              </div>

            </form>


            <div >
              {categories.map((category) => (
                <Category
                  key={category.docId}
                  docId={category.docId}
                  order={category.order}
                  title={category.title}
                  description={category.description}
                  onUpdata={handlerUpdataCategory}
                  onDelete={handlerDeleteCategory}
                  handleUserLoggedIn={handleUserLoggedIn }

                />
              ))}
            </div>
          </div>
        </section >
      </div>
    </MenuWapper    >


  );

}
