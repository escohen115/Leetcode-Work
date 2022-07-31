DROP TABLE IF EXISTS mytable;


select  c.company_code,c.founder,
(select count(*) from Lead_Manager where company_code=c.company_code  ) ,
(select count(*) from Senior_Manager where company_code=c.company_code  ),
(select count(*) from Manager where company_code=c.company_code  ),
(select count(*) from Employee  where company_code=c.company_code  )


from  Company as c order by c.company_code


select continent, (sum(ci.population)/count(ci.id)) as average_city_population
from country as co
inner join city as ci
on ci.CountryCode = co.Code
group by continent;

                   
                   
       