JsOsaDAS1.001.00bplist00�Vscripto� ( ( )   = >   { 
     c o n s t   h i g h l i g h t R e s u l t s   =   ( t e x t ,   c o l o r )   = >   { 
         d o c u m e n t . d e s i g n M o d e   =   " o n " ;   / /   h t t p s : / / s t a c k o v e r f l o w . c o m / a / 5 8 8 7 7 1 9 
         v a r   s e l e c t i o n   =   w i n d o w . g e t S e l e c t i o n ( ) ; 
         s e l e c t i o n . c o l l a p s e ( d o c u m e n t . b o d y ,   0 ) ; 
         w h i l e   ( w i n d o w . f i n d ( t e x t ) )   { 
             d o c u m e n t . e x e c C o m m a n d ( " H i l i t e C o l o r " ,   f a l s e ,   c o l o r ) ; 
             s e l e c t i o n . c o l l a p s e T o E n d ( ) ; 
         } 
         d o c u m e n t . d e s i g n M o d e   =   " o f f " ; 
     } ; 
 
     l e t   m o s t R e c e n t S e a r c h T e x t   =   " " ; 
     c o n s t   s e a r c h   =   t e x t   = >   { 
         h i g h l i g h t R e s u l t s ( m o s t R e c e n t S e a r c h T e x t ,   " t r a n s p a r e n t " ) ; 
         h i g h l i g h t R e s u l t s ( t e x t ,   " r g b ( 2 5 5   2 5 5   1   /   5 0 % ) " ) ; 
         m o s t R e c e n t S e a r c h T e x t   =   t e x t ; 
     } ; 
 
     c o n s t   i n p u t   =   d o c u m e n t . c r e a t e E l e m e n t ( " i n p u t " ) ; 
     i n p u t . p l a c e h o l d e r   =   " S e a r c h . . . " ; 
     i n p u t . s t y l e . p a d d i n g   =   " 1 0 p x   1 5 p x " ; 
     i n p u t . s t y l e . f o n t S i z e   =   " 1 5 p x " ; 
     i n p u t . s t y l e . b o r d e r R a d i u s   =   " 3 p x " ; 
     i n p u t . s t y l e . b o r d e r   =   " s o l i d   1 p x   l i g h t g r a y " ; 
 
     c o n s t   f o r m   =   d o c u m e n t . c r e a t e E l e m e n t ( " f o r m " ) ; 
     f o r m . s t y l e . d i s p l a y   =   " n o n e " ; 
     f o r m . s t y l e . p o s i t i o n   =   " f i x e d " ; 
     f o r m . s t y l e . t o p   =   " 1 5 p x " ; 
     f o r m . s t y l e . r i g h t   =   " 1 5 p x " ; 
     f o r m . s t y l e . z I n d e x   =   " 2 1 4 7 4 8 3 6 4 7 " ;   / /   h t t p s : / / s t a c k o v e r f l o w . c o m / a / 8 5 6 5 6 9 
     f o r m . a d d E v e n t L i s t e n e r ( " s u b m i t " ,   e   = >   { 
         e . p r e v e n t D e f a u l t ( ) ; 
         s e a r c h ( i n p u t . v a l u e ) ; 
     } ) ; 
 
     c o n s t   c l o s e   =   d o c u m e n t . c r e a t e E l e m e n t ( " a " ) ; 
     c l o s e . i n n e r T e x t   =   "*/ " ; 
     c l o s e . h r e f   =   " j a v a s c r i p t : v o i d ( 0 ) " ; 
     c l o s e . s t y l e . f o n t S i z e   =   " 3 0 p x " ; 
     c l o s e . s t y l e . p a d d i n g   =   " 1 5 p x " ; 
     c l o s e . s t y l e . t e x t D e c o r a t i o n   =   " n o n e " ; 
     c l o s e . a d d E v e n t L i s t e n e r ( " c l i c k " ,   e   = >   { 
         e . p r e v e n t D e f a u l t ( ) ; 
         s e a r c h ( " " ) ; 
         f o r m . s t y l e . d i s p l a y   =   " n o n e " ; 
     } ) ; 
 
     f o r m . a p p e n d C h i l d ( i n p u t ) ; 
     f o r m . a p p e n d C h i l d ( c l o s e ) ; 
     d o c u m e n t . b o d y . a p p e n d C h i l d ( f o r m ) ; 
 
     d o c u m e n t . a d d E v e n t L i s t e n e r ( " k e y d o w n " ,   e v e n t   = >   { 
         i f   ( e v e n t . m e t a K e y   & &   e v e n t . k e y   = = =   " f " )   { 
             e v e n t . p r e v e n t D e f a u l t ( ) ; 
             f o r m . s t y l e . d i s p l a y   =   " b l o c k " ; 
             i n p u t . f o c u s ( ) ; 
         } 
     } ) ; 
 } ) ( ) ;                              jscr  ��ޭ