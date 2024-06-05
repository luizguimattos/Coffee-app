import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  Catalog,
  HeadingInfo,
  Intro,
  IntroContent,
  IntroHeading,
} from "./styles";
import { useTheme } from "styled-components";
import { useState } from "react";
import { ICatalogItem } from "../../domain/models/CatalogItem";
import { CatalogCard } from "../../components/Catalog/CatalogCard";

import { catalogData } from "../../assets/data.json";

export function Home() {
  const theme = useTheme();

  const [catalog, setCatalog] = useState<ICatalogItem[]>(
    catalogData as ICatalogItem[]
  );

  return (
    <div>
      <Intro>
        <IntroContent>
          <div>
            <IntroHeading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </IntroHeading>

            <HeadingInfo>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["yellow-dark"] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["base-text"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </HeadingInfo>
          </div>

          <img src="/intro-logo.png"></img>
        </IntroContent>
      </Intro>
      <Catalog>
        <h1>Nossos Cafés</h1>
        <div>
          {catalog.length > 0 ? (
            catalog.map((item) => <CatalogCard key={item.id} item={item} />)
          ) : (
            <h1>empty list</h1>
          )}
        </div>
      </Catalog>
    </div>
  );
}
