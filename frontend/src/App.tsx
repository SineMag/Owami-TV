import "./index.css";

type Recipe ={
  id: number;
  title: string;
  description: string;
  time:string;
  rating:number;
  image: string;
}

const recommendedRecipes: Recipe[] = [
  {
    id:1,
    title: "Creamy Chicken Pasta",
    description: "A quick and comfortig family dinner",
    time:"30 min",
    rating:4.9,
    image: "https://drive.google.com/file/d/1Vuy-r6ffHFYCaVA4C4I7PSofJnTLg9c-/view?usp=sharing"
  },
  {
    id:2,
    title:"Chicken Curry",
    description:"Rich and warm chcicke with flavour",
    time: "25min",
    rating:5,
    image:"https://drive.google.com/file/d/1Vuy-r6ffHFYCaVA4C4I7PSofJnTLg9c-/view?usp=sharing"
  },
{
  id:1,
  title:"Beef Stew",
  description:"awesome beef turned to stew",
  time:"1h 30 min",
  rating:5,
  image:"https://drive.google.com/file/d/1Vuy-r6ffHFYCaVA4C4I7PSofJnTLg9c-/view?usp=sharing"

},
];

const popularRecipes:Recipe[] = [
  {
    id:4,
    title:"Traditional lamb Curry",
    description:"simple ingredients, big aroma",
    time:"1h 15min",
    rating:3.9,
    image:"https://drive.google.com/file/d/1Vuy-r6ffHFYCaVA4C4I7PSofJnTLg9c-/view?usp=sharing"

  },
  {
    id:5,
    title:"Tomato Rice",
    description:"mmmh, nice with and extra i",
    time:"20 min",
    rating:4.5,
    image:"https://drive.google.com/file/d/1Vuy-r6ffHFYCaVA4C4I7PSofJnTLg9c-/view?usp=sharing"
  },
  {
    id:6,
  title:"Grilled chicken",
  description:"awesome stuff",
  time:"55min",
  rating:5,
  image:"https://drive.google.com/file/d/1Vuy-r6ffHFYCaVA4C4I7PSofJnTLg9c-/view?usp=sharing"

},
];

function RecipeCard({ recipe}: {recipe: Recipe}) {
  return (
    <article className="recipe-card" tabIndex={0}>
      <img src={recipe.image} alt={recipe.title} />

      <div className="recipe-card-content">
        <div className="recipe-meta">
          <span>{recipe.time}</span>
          <span>{recipe.rating}</span>
        </div>

<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
      </div>
      </article>
  );
}

function RecipeRow({
  title,
  recipes,

}: {
  title: string;
  recipes: Recipe[];
}) {
  return (
    <section className="recipe-section">
      <div className="section-heading">
        <h2>{title}</h2>
        <button>View All</button>
      </div>

      <div className="recipe-row">
        {recipes.map((recipe)=> (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

    </section>
  )
}


function App() {
  return (
    <main className="app">
      <header className="topbar">
        <div className="logo">
          <span>O</span>wami
        </div>

        <nav>
          <button>Home</button>
          <button>Discover</button>
          <button>My Recipes</button>
        </nav>

        <div className="topbar-actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Profile">●</button>
        </div>
      </header>

    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">YOUR PERSONAL COOKING COMPANION</p>
        <h1> What are you cooking today?</h1>
        <p className="hero-description">
          Discover recipes based on what you love, what's popular near you, or whatever ingredients you already have.
        </p>

        <div className="hero-actions">
          <button className="primary-button">
            Ask Owami
          </button>

          <button className="secondary-button">Browse Recipes </button>

        </div>

      </div>
    </section>


      <RecipeRow 
      title="Popular for you"
      recipes={recommendedRecipes}/>

      <RecipeRow 
      title="Popular near you"
      recipes={popularRecipes}/>



      <section className="ingrediennts-section">
        <div>
          <p className="eyebrow">NOT SURE WHAT TO MAKE?</p>
          <h2>Cook with what you have.</h2>
          <p>
            Tell Owami what's in your kitchen table and we'll help you discover something delicios.
          </p>
        </div>

        <button className="primary-button"> Tell Owami your ingredients</button>
      </section>



    </main>
  )
}

export default App;