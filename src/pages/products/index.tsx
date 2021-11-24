import { useEffect, useState } from "react";
import api from "../../services/api";

interface IProduct {
    Title: string;
    Year: string;
    imdID: string;
    Type: string;
    Poster: string;
}

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const loadingProducts = async () => {
        const results = await api.get(`/?apikey=8b7672d0&s=batman`);
        setProducts(results.data.Search);
    };

    useEffect(() => {
        loadingProducts();
    }, []);
    
    return(
        <> {/* fragment - feito pra não precisar usar o div. É um container que engloba o return */}
            <h1>Produtos</h1>
            <ul>
                {products.map(p => {
                    return(
                        <li>
                            <img src={p.Poster} />
                            {p.Title}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
export default Products;