/*
Version scheme:
(define (compte-bon N Lnb)
  (cond ((null? Lnb) (if (zero? N) '() #f))
        ((< N (car Lnb)) #f)
        ((= N (car Lnb)) (list N))
        (else (let ((sol-partielle (compte-bon (- N (car Lnb)) 
                                                 (cdr Lnb))))
                (if sol-partielle
                    (cons (car Lnb) sol-partielle)
                    (compte-bon N (cdr Lnb)))))))
*/
function compteBon( n, nombres, i, res ) {
    if ( i === nombres.length ) {
        if ( n === 0 ) {
            res = [];
            return res;
        }
        else {
            return false;
        }
    }
    else if ( n < nombres[ i ] ) {
        return false;
    }
    else if ( n === nombres[ i ] ) {
        res.push( n );
        return res;
    }
    else {
        var solutionPartielle = compteBon( (n - nombres[ i ]), nombres, (i+1), res );
        if ( solutionPartielle ) {
            solutionPartielle.push( nombres[ i ] );
            return solutionPartielle;
        }
        else {
            res = compteBon( n, nombres, (i+1), res );
            return res;
        }
    }
}
