
import ProductCard from '../components/ProductCard';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { Switch } from '../components/ui/switch';
import { useToast } from '../components/ui/use-toast';
import { useGetProductsQuery } from '../redux/feature/api/apiSlice';
import { setPriceRange, toogleStatus } from '../redux/feature/products/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IProduct } from '../types/globalTypes';

export default function Products() {
  // const [data, setData] = useState<IProduct[]>([]);
  // const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();





  // useEffect(() => {
  //   fetch('http://127.0.0.1:9000/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     });
  // }, []);

  const {data, isLoading,isError} = useGetProductsQuery(undefined)

  const { toast } = useToast();

  //! Dummy Data

  // const status = false;
  // const priceRange = 100;

  const {priceRange,status} = useAppSelector((state) => state.product);

  //! **
  
  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]))
    console.log(value);
  };

  let productsData;

  if (!isLoading && !isError) {
    if (status) {
      productsData = data?.filter(
        (item: { status: boolean; price: number; }) => item.status === true && item.price > priceRange
        
        );
        console.log( productsData,'productsData', data);
    } else if (priceRange > 0) {
      productsData = data?.filter((item: { price: number; }) => item.price > priceRange);
    } else {
      productsData = data;
    }
  }
  
  
  

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            onClick={() => dispatch(toogleStatus())}
           className="flex items-center space-x-2 mt-3">
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
