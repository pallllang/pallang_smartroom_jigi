import Book from "../models/Book";

export const home = async(req, res) => {
  const books = await Book.find({});
  res.render("book", {books});
}

export const watch = async(req, res) => {
  const {id} = req.params;
  const book = await Book.findById(id);
  if (book === null){
    return res.render("404");
  }
  return res.render("watch", { book});
}

export const getEdit = async(req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book){
    return res.render("404");
  }
  return res.render("edit", {book});
}

export const postEdit = async(req, res) => {
  const { id } = req.params;
  const {student, date, time} = req.body;
  const book = await Book.exists({ _id: id});
  if (!book){
    return res.render("404");
  }

  await Book.findByIdAndUpdate(id, {
    student,
    date,
    time
  });

  return res.redirect(`/book/${id}`);
}

export const getUpload = (req, res) => {
  return res.render("upload");
}

export const postUpload = async(req, res) => {
  const {student, date, time} = req.body;
  try {
    await Book.create({
      student,
      date,
      time,
    });
    return res.redirect("/book");
  } catch (error) {
      return res.status(400).render("upload");
  }
}

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);

  return res.redirect("/book");
}