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

                   
                   
select h.hacker_id, h.name, sum(s.highscores) from hackers as h
inner join(
    select hacker_id, challenge_id, max(score) as highscores from submissions as s
    group by hacker_id, challenge_id
) as s
on s.hacker_id = h.hacker_id
group by h.hacker_id, h.name
having sum(s.highscores) > 0
order by
sum(s.highscores) desc, h.hacker_id;