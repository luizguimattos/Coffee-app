import { useEffect, useState } from "react";
import { ICatalogItem } from "../../domain/models/CatalogItem";
import { QuantityInput } from "../Form/QuantityInput/QuantityInput";
import {
  CardContainer,
  CatalogItemImg,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";

interface CatalogCardProps {
  item: ICatalogItem;
}

export function CatalogCard({ item }: CatalogCardProps) {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const theme = useTheme();
  const { addItem } = useCart();

  function handleAddItem() {
    addItem({ id: item.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => {
        return state - 1;
      });
    }
  }

  function increaseQuantity() {
    setQuantity((state) => {
      return state + 1;
    });
  }

  return (
    <CardContainer>
      <CatalogItemImg src={item.image} alt={item.name}></CatalogItemImg>
      <Tags>
        {item.tags.map((tag) => {
          return <span key={tag}>{tag}</span>;
        })}
      </Tags>
      <Title>{item.name}</Title>
      <Description>{item.description}</Description>
      <Control>
        <Price>
          <span>R$</span>
          <span>{item.unitPrice.toFixed(2)}</span>
        </Price>
        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={increaseQuantity}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors["base-card"]}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors["base-card"]} />
            )}
          </button>
        </Order>
      </Control>
    </CardContainer>
  );
}
