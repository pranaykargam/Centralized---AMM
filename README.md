
# constant product AMM :

## Outline
    
    What is an AMM?

      
       * AMM = Automated Market Maker. It is a smart contract that:

       * Holds two tokens in a pool,reserves X and Y.

       * Always offers a price using a formula instead of an order book.

      

     ** Price of a tokens are determined by the equation x*y=k.
<img src = "./images/Graph__1_.jpg">
<img src = "./images/01.png"/>

## ⭐️ Swap how many token to return in a trade?? 

   Swaping from Token A to Token B.

    dx = Amount of token A in. 

    dy = Amount of token B out.

Before Swap:              
X.Y = k    


After Swap
:
(X + dx)(Y - dy) = k.
    
    (X + dx)(Y - dy) = K
    
    dy??

    Y-dy = k/(X + dx)

    dy = Y- XY/(X + dx)

    dy = Xy - Yx + Ydx/(X + dx)

    dy = Ydx/(X + dx)


## ⭐️ Add Liquidity: 

-   How many shares to Mint??


<img src = "./images/02.png"/>
   


## ⭐️ How many shares to Mint??

* Increase in Liquidity  is propotional to increase in Share.

        Lo = total liquid before.

        L1 = total liquid after.

        S = total shares to mint.

        T = total shares before.

            
finding S??

    L1/L0 = T+ S / T  ------>>>  L1/L0 = T+S/T  ---- (1)

    L1/L0 * T = T + S   ---- (2)

    L1/L0.T - T = S    -----> (3)

    TL1/L0 - T = TL1-TL0/L0 = S -----> (4)

    S = T(L1 - L0)/L0     

                
## ⭐️ How to measure total liquidity from X and Y??

    f(X,Y) = total liquidity.

    f(X,Y) = √(X*Y)

    XY = K

    (X+dx)(Y+dy) = K'

- Adding liquidity increases K (area of XY)

<img src = "./images/03.png"/>


## ⭐️ What is L0 and L1??

  f(X,Y) =   total Liquidity 
  
        √(X*Y) --> L0 = √(X*Y)
                   L1 = √((X+dx)*(Y+dy))  -----(1)

            L1-L0/L0 T = S => L1-Lo/L0 = dx/X = dy/Y --(2)

            L1-L0/L0 = (√(X+dx)*(Y+dy) - √(X*Y))/√(X*Y)--(3)

    L1-L0/L0  = (√XY + Xdy + dxY + dxdy - √(XY))/√XY  ---(4) 

dx/dy = X/Y So dy = Ydx/X

    L1-L0/L0 = (√XY + X(Ydx/X) + dxY + dx(Ydx/X) - √(XY))/√XY  ---(5)

    L1-L0/L0 = (√XY + Ydx + Ydx + dx^2(Y/X) - √(XY))/√XY  ---(6)  {pull out Y}

    √X +2dx + dx^2/X - √XY/√XY --(7) {multiply by }
  

     √x/√x √X + 2dx + dx^2/X - √XY/√XY --(8)
 
    √X^2+ 2Xdx + dx^2 - √X^2Y/√X^2Y --(9)

     (X+dx)√Y- X√Y/√XY --(10)

    X√Y+ dx√Y - X√Y/√XY --(11)

    dx/x√Y/√XY --(12)

<img src = "./images/04.png"/>


## ⭐️ Remove Liquidity: How many tokens to Withdraw??

     Withdraw tokens propotional to shares. 

     a = Amount Out = f(dx/dy) = √dxdy

     L = Total Liquidity = f(X,Y) = √XY

     S = Amount of Shares to burn

     T = Total Shares

   


                 a/L = S/T  -----> a = L*S/T

                 √dxdy/√XY = S/T 

                 find dx ?? 

dx/dy = X/Y So dy = Ydx/X

                    √dxdy =  √XY * S/T
                    √dx(Ydx/X) =  √XY * S/T  {pull out dx}

                    dx √Y/X =  √XY * S/T
                    dx =  √XY * S/T * √Y/X

                    dx =  X * S/T

Likewise:               
                       
                         dy = Y * S/T                    


    
                   
