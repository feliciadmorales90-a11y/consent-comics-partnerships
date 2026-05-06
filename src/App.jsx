import React, { useState, useEffect, useMemo, useCallback } from "react";

// === EMBEDDED CRM DATA ===
const RAW_DATA = {"organizations":[{"t":1,"cat":"Aligned Media/Education","sub":"Sex-positive education","org":"Make Love Not Porn Academy","name":"Cindy Gallop","title":"Founder","email":"cindy@makelovenotporn.com","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-0"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Alpha Chi Omega","name":"Summer Sibly","title":"President","email":"SummerSibly2026@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-1"},{"t":1,"cat":"College Greek Life","sub":"Divine 9 (Black Greek)","org":"Alpha Kappa Alpha Sorority","email":"media@aka1908.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-2"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Alpha Phi","name":"Elly Hall","title":"President","email":"ellyhall2026@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-3"},{"t":1,"cat":"College Greek Life","sub":"Divine 9 (Black Greek)","org":"Alpha Phi Alpha","email":"support@apa1906.net","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-4"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Chi Omega","title":"President","email":"SarahCampbell2027@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-5"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Delta Delta Delta","title":"President","email":"evelynahdieh2026@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-6"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Delta Gamma","title":"President","email":"zoelively2026@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-7"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Delta Tau Delta","title":"President","email":"michaelhamad2028@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-8"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Kappa Alpha Theta","title":"President","email":"laraweissmann2026@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-9"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Kappa Delta","title":"President","email":"NUKD.Pres@gmail.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-10"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Lambda Chi Alpha","title":"President","email":"jackeasterby2028@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-11"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Phi Gamma Delta","title":"President","email":"ethanaditya2028@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-12"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Phi Kappa Psi*","title":"President","email":"jakob.davis@phikappapsi.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-13"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Phi Mu Alpha Sinfonia","title":"President","email":"president@iotasinfonia.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-14"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Sigma Alpha Epsilon","title":"President","email":"NoahQuintana2028@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-15"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Sigma Chi","email":"curtisroselle2028@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-16"},{"t":1,"cat":"College Greek Life","sub":"Divine 9 (Black Greek)","org":"Sigma Gamma Rho","email":"help@sgrho1922.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-17"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Sigma Nu","email":"lincolnwithrow2028@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-18"},{"t":1,"cat":"College Greek Life","sub":"Northwestern (alma mater)","org":"Zeta Beta Tau","email":"JebSdC@u.northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-19"},{"t":1,"cat":"College Greek Life","sub":"Divine 9 (Black Greek)","org":"Zeta Phi Beta","email":"info@zphibhq.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-20"},{"t":1,"cat":"Colleges — HBCUs","sub":"HBCU","org":"Florida A&M University","email":"counseling@famu.edu.","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-21"},{"t":1,"cat":"Colleges — HBCUs","sub":"HBCU","org":"Howard College","email":"cfenter@howardcollege.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-22"},{"t":1,"cat":"Colleges — HBCUs","sub":"HBCU","org":"Morehouse College","email":"Counseling@morehouse.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-23"},{"t":1,"cat":"Colleges — HBCUs","sub":"HBCU","org":"Spelman","email":"libbythigpen@spelman.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-24"},{"t":1,"cat":"Colleges — HBCUs","sub":"HBCU","org":"Tuskegee University","email":"amyerstaylor@tuskegee.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-25"},{"t":1,"cat":"Colleges — HBCUs","sub":"HBCU","org":"Xavier University of Louisiana","email":"ckgant@xula.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-26"},{"t":1,"cat":"Colleges — Health Services","sub":"American College Health Association","org":"ACHA.org","email":"contact@acha.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-27"},{"t":1,"cat":"Colleges — Title IX / Gender Studies","sub":"Title IX office","org":"Clemson University - interpersonal violence prevention","email":"CUTitleIX@clemson.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-28"},{"t":1,"cat":"Colleges — Title IX / Gender Studies","sub":"Tiffany alma mater Title IX","org":"Northwestern University (my alma mater)","email":"OCR@northwestern.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-29"},{"t":1,"cat":"Colleges — Title IX / Gender Studies","sub":"Illustrator alma mater Title IX","org":"Washington State University (illustrator's alma mater)","email":"ccr@wsu.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-30"},{"t":1,"cat":"Conferences","sub":"Speaking opportunity","org":"National Sexual Assault Conference","email":"nsac@respecttogether.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-31"},{"t":1,"cat":"Culturally-Specific Orgs","sub":"Black-led org","org":"100 Black Men","email":"info@100bmoa.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-32"},{"t":1,"cat":"Culturally-Specific Orgs","sub":"Black-led org","org":"Jack and Jill","email":"info@jack-and-jill.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-33"},{"t":1,"cat":"Culturally-Specific Orgs","sub":"Black-led org","org":"brave space alliance","email":"aichac@bravespacealliance.org. ","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-34"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Aid the Silent","email":"info@aidthesilent.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-35"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Break the Cycle","email":"support@breakthecycle.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-36"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Futures Without Violence","email":"info@futureswithoutviolence.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-37"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"It's On Us (program and chapters)","email":"press@civicnation.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-38"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Jewish Women's International","email":"communications@jwi.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-39"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Joyful Heart Foundation","email":"info@joyfulheartfoundation.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-40"},{"t":1,"cat":"DV/SA National Orgs","sub":"Already cited in book — warm angle","org":"Love Is Respect","name":"Jake","email":"jcrowther@thehotline.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-41"},{"t":1,"cat":"DV/SA National Orgs","sub":"Already cited in book — warm angle","org":"Love Is Respect - National Domestic Violence Hotline","email":"conference@thehotline.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-42"},{"t":1,"cat":"DV/SA National Orgs","sub":"Already cited in book — warm angle","org":"National Domestic Violence Hotline","email":"hotlinemedia@spitfirestrategies.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-43"},{"t":1,"cat":"DV/SA National Orgs","sub":"Already cited in book — warm angle","org":"No More","email":"info@nomore.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-44"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"One Love Foundation","email":"marketing@joinonelove.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-45"},{"t":1,"cat":"DV/SA National Orgs","sub":"Already cited in book — warm angle","org":"RAINN","name":"Erinn Robinson","title":"Press Secretary","email":"media@rainn.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-46"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Raliance","email":"info@raliance.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-47"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"SafeBae","email":"shael@safebae.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-48"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"Strong Hearts Native Helpline","email":"media@strongheartshelpline.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-49"},{"t":1,"cat":"DV/SA National Orgs","sub":"High-profile mission match","org":"domesticshelters.org - Alliance for HOPE International","name":"Ashley Rumschlag","email":"ashley@allianceforhope.com","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-50"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"American Society for Deaf Children","email":"info@deafchildren.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-51"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"Aspen Camp for the Deaf and Hard of Hearing","email":"Office@aspencamp.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-52"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"Center On Deafness Inland Empire","email":"info@codie.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-53"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"Deaf Community Resource Center","email":"info@dcrcohio.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-54"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"Deaf DAWN","email":"hotline@deafdawn.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-55"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"Deaf World Aganist Violence Everywhere","email":"info@dwaveohio.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-56"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"DeafHope","email":"deafhope@deaf-hope.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-57"},{"t":1,"cat":"Deaf Community Orgs","sub":"Deaf-serving org","org":"National Association for the Deaf","email":"nad.info@nad.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-58"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Beacon Park Middle School","name":"Grace Kim","title":"Asst. Principal","email":"GraceKim@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-59"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Irvine High School","name":"Jeffrey Hernandez","title":"Principal","email":"JeffreyHernandez@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-60"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Lakeside Middle","name":"Joe Ziemann","title":"Asst. Principal","email":"JoeZiemann@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-61"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Northwood Highschool","name":"Brad Van Patten","title":"Coordinator","email":"bradvanpatten@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-62"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Portola Highschool","name":"Michelle Aaronson","title":"School Psychologist","email":"MichelleAaronson@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-63"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Rancho San Joaquin Middle","name":"Sofia Moraes","title":"Asst. Principal","email":"SofiaMoraes@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-64"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Sierra Vista Middle School","name":"Nana Ito","title":"Asst. Principal","email":"NanaIto@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-65"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"University High School (Irvine)","name":"Hanna Addessi","title":"Counselor","email":"HannaAddessi@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-66"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Vista Verde Midddle School","name":"Maria Dominguez","title":"Counselor","email":"mgdominguez@greenfield.k12.ca.us","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-67"},{"t":1,"cat":"K-12 Schools (CA local beachhead)","sub":"IUSD/Greenfield contact","org":"Woodbridge Highschool","name":"Michelle Ballard","title":"Mental Health Counselor","email":"michelleballard@iusd.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-68"},{"t":1,"cat":"OC-Local DV Orgs (hometown beachhead)","sub":"OC DV org","org":"Human Options","email":"info@humanoptions.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-69"},{"t":1,"cat":"OC-Local DV Orgs (hometown beachhead)","sub":"OC DV org","org":"Laura's House","email":"info@laurashouse.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-70"},{"t":1,"cat":"OC-Local DV Orgs (hometown beachhead)","sub":"OC DV org","org":"Lumina Alliance","email":"Contact@LuminaAlliance.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-71"},{"t":1,"cat":"OC-Local DV Orgs (hometown beachhead)","sub":"OC DV org","org":"Radiant Futures","email":"info@radiantfutures.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-72"},{"t":1,"cat":"OC-Local DV Orgs (hometown beachhead)","sub":"OC DV org","org":"Waymakers","name":"Jennifer Reed","title":"Program Manager","email":"jreed@waymakersoc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-73"},{"t":1,"cat":"Sports & Military","sub":"NCAA","org":"NCAA","title":"Internal Ops","email":"aagnew@ncaa.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-74"},{"t":1,"cat":"Sports & Military","sub":"US SafeSport — sport governance","org":"US Safesport","email":"marketing.approvals@safesport.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-75"},{"t":1,"cat":"Survivor & Family Support","sub":"Child abuse prevention","org":"Prevent Child Abuse America","email":"tmorgan@preventchildabuse.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-76"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"BBBS","org":"Big Brothers Big Sisters","email":"causemarketing@bbbs.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-77"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Boy Scouts","org":"Boy Scouts","email":"PR@scouting.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-78"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Girl Scouts","org":"Girl Scouts","email":"media@girlscouts.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-79"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Girls Inc.","org":"Girls Inc. of Alameda County","email":"kbradley@girlsinc-alameda.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-80"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Girls Inc.","org":"Girls Inc. of Chicago","email":"info@girlsincofchicago.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-81"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Girls Inc.","org":"Girls Inc. of New York City","email":"communications@girlsincnyc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-82"},{"t":1,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Girls Inc.","org":"Girls Inc. of Orange County","email":"lbenjamin@girlsinc-oc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-83"},{"t":2,"cat":"Aligned Media/Education","sub":"Survivor-led education","org":"Wilderness to Wild","name":"Sarah Mcdugal","email":"ask@wildernesstowild.com","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-84"},{"t":2,"cat":"Brand/Corporate Partners","sub":"Dating app","org":"Bumble","email":"press@team.bumble.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-85"},{"t":2,"cat":"Brand/Corporate Partners","sub":"Dating app","org":"Grindr","email":"press@grindr.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-86"},{"t":2,"cat":"Brand/Corporate Partners","sub":"Dating app","org":"Hinge","email":"partnerships@hinge.co","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-87"},{"t":2,"cat":"Brand/Corporate Partners","sub":"Dating app","org":"OkCupid","email":"press@okcupid.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-88"},{"t":2,"cat":"Brand/Corporate Partners","sub":"Dating app","org":"Taimi","email":"partnerships@taimi.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-89"},{"t":2,"cat":"Brand/Corporate Partners","sub":"Dating app","org":"Tinder","email":"partners@gotinder.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-90"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"Boston College Women’s and Gender Studies Program","name":"Sharlene Janice Nagy Hesse-Biber","title":"Director","email":"sharlene.hesse-biber@bc.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-91"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"Rutgers Women's, Gender, and Sexuality Studies","name":"Aretha Oliver-Crayton","email":"areolive@rutgers.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-92"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"San Diego State Women's, Gender, and Sexuality Studies","name":"Claire Villa","title":"Administrative Coordinator","email":"cevilla@sdsu.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-93"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"Smith College Women, Gender and Sexuality Studies","name":"Lorraine Hedger","title":"Administrative Coordinator","email":"lhedger@smith.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-94"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"Stanford Feminist, Gender, and Sexuality Studies","name":"Leah Chase","title":"Program Assistant","email":"lachase@stanford.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-95"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"UC Santa Barbara Feminist Studies","name":"Claudia Castaneda","title":"Student Affairs Coordinator","email":"claudiacastaneda@ucsb.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-96"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"UCLA Gender Studies","name":"Samantha Hogan","title":"Student Services Advisor","email":"shogan@gender.ucla.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-97"},{"t":2,"cat":"Colleges — Title IX / Gender Studies","sub":"Gender studies dept","org":"Umass Amherst Women, Gender, Sexuality Studies","name":"Erica Aloisio","title":"Business Manager","email":"ealoisio@umass.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-98"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"Havard Women's Center","email":"sroh@fas.harvard.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-99"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"MIT Women's Center","email":"lbgtq_wxgs@mit.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-100"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"UCI Women's Center","email":"womxnscenter@uci.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-101"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"UCLA Women's Center","email":"csw@csw.ucla.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-102"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"UCR Women's Center","email":"wrc@ucr.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-103"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"UCSC Women's Center","email":"women@ucsc.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-104"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"UCSD Women's Center","email":"women@ucsd.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-105"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"UPenn Women's Center","email":"vpul-pwc@pobox.upenn.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-106"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"Vassar Women's Center","email":"womenscenter@vassar.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-107"},{"t":2,"cat":"Colleges — Women's Centers","sub":"University women's center","org":"Wellesley Women's Center","email":"wcw@wellesley.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-108"},{"t":2,"cat":"Culturally-Specific Orgs","sub":"LGBTQ+ advocacy","org":"Human Rights Campaign: HRC","email":"feedback@hrc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-109"},{"t":2,"cat":"DV/SA National Orgs","sub":"Anti-trafficking advocacy","org":"Chicago Alliance Against Sexual Exploitation","email":"info@caase.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-110"},{"t":2,"cat":"DV/SA National Orgs","sub":"Regional DV org","org":"Day One (NYC)","email":"info@dayoneny.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-111"},{"t":2,"cat":"DV/SA National Orgs","sub":"SVPA + chapters","org":"SVPA Arkansas","email":"uark@s-v-p-a.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-112"},{"t":2,"cat":"DV/SA National Orgs","sub":"SVPA + chapters","org":"SVPA BU","email":"bu@s-v-p-a.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-113"},{"t":2,"cat":"DV/SA National Orgs","sub":"SVPA + chapters","org":"SVPA Columbia","email":"columbia@s-v-p-a.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-114"},{"t":2,"cat":"DV/SA National Orgs","sub":"SVPA + chapters","org":"Sexual Violence Prevention Association","email":"info@s-v-p-a.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-115"},{"t":2,"cat":"Faith Communities","sub":"Catholic theologian (academic)","org":"Catholic Theological Society / academic","name":"Brianne Jacobs","email":"jacobsb@emmanuel.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-116"},{"t":2,"cat":"Faith Communities","sub":"Catholic theologian (academic)","org":"Catholic Theological Society / academic","name":"Jennifer Owens-Jofré","email":"jenniferowensjofre@lmu.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-117"},{"t":2,"cat":"Faith Communities","sub":"Catholic theologian (academic)","org":"Catholic Theological Society / academic","name":"Jaisy Joseph","email":"jaisy.joseph@villanova.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-118"},{"t":2,"cat":"Faith Communities","sub":"Catholic theologian (academic)","org":"Catholic Theological Society / academic","name":"Jessica Coblentz","email":"jcoblentz@saintmarys.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-119"},{"t":2,"cat":"Faith Communities","sub":"Catholic theologian (academic)","org":"Catholic Theological Society / academic","name":"Julia Feder","email":"jfeder@saintmarys.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-120"},{"t":2,"cat":"Libraries","sub":"Chicago library","org":"Chicago Public Library — Highland Park Branch","email":"bkeller@hplibrary.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-121"},{"t":2,"cat":"Mental Health / Counseling Pros","sub":"Professional association","org":"American Psychological Association (APA)","name":"Alicia Aebersold","title":"Chief Communications Officer","email":"aaebersold@apa.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-122"},{"t":2,"cat":"Mental Health / Counseling Pros","sub":"Professional association","org":"National Association for Addiction Professionals","name":"Caitlin Corbett","title":"Sr. Communications Manager","email":"ccorbett@naadac.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-123"},{"t":2,"cat":"Mental Health / Counseling Pros","sub":"Professional association","org":"Society of Counseling Psychology (APA Division 17)","name":"Debra Nolan","title":"Association Manager","email":"dnolan@div17.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-124"},{"t":2,"cat":"Mental Health / Counseling Pros","sub":"Professional association","org":"The American Counseling Association","name":"Caressa Morris","title":"Director of Marketing","email":"cmorris@counseling.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-125"},{"t":2,"cat":"Mental Health / Counseling Pros","sub":"Professional association","org":"The Steve Fund","name":"Karmen Royall","email":"karmen@stevefund.org","form":"stevefund.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-126"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Center for Parent Education","email":"parenting@unt.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-127"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Center for Parenting","email":"hstolz@utk.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-128"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Circle of Parents","email":"csavage@circleofparents.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-129"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Families First Parenting Programs","email":"info@families-first.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-130"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Louisiana Parenting Education Network","email":"lapen@louisianapartnership.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-131"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"National Parent Teacher Organization (PTO)","email":"mail@pto.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-132"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"National Parents Organization","email":"parents@nationalparentsorganization.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-133"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"National Parents Union","email":"NPU@mercuryllc.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-134"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Parent Action Committee","name":"Chauncy Young","email":"c.young@newsettlement.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-135"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Parent Revolution","name":"Seth Litt","email":"slitt@parentrevolution.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-136"},{"t":2,"cat":"Parent Orgs","sub":"Reproductive health org","org":"Planned Parenthood","email":"mediarelations@ppncs.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-137"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Resource Center for Parents and Children","email":"rcpc@rcpcfairbanks.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-138"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Rhode Island Parent Information Network","email":"info@ripin.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-139"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"Statewide Parent Advocacy Network","email":"info@spanadvocacy.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-140"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"The Arkansas Parenting Education Network","email":"apen@arkansasctf.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-141"},{"t":2,"cat":"Parent Orgs","sub":"Parent org / network","org":"the National Parents Union","name":"Keri Rodrigues","email":"keri@npunion.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-142"},{"t":2,"cat":"Sports & Military","sub":"Military sexual trauma advocacy","org":"Protect Our Defenders","email":"info@protectourdefenders.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-143"},{"t":2,"cat":"Sports & Military","sub":"USOPC","org":"US Olympic Committee","email":"Foundation@usopc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-144"},{"t":2,"cat":"Sports & Military","sub":"VA — Military Sexual Trauma Unit","org":"VA Military Sexual Trauma Unit","email":"Monica.Sanchez2@va.gov","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-145"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"Alabama Coalition Against Rape","email":"ACARinfo2022@gmail.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-146"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"Arkansas Coalition Against Sexual Assault","name":"Lacye Day","email":"klday@arkcasa.org","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-147"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"Connecticut Alliance to End Sexual Violence, Inc.","email":"info@endsexualviolencect.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-148"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"Idaho Coalition Against Sexual and Domestic Violence","email":"info@engagingvoices.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-149"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"Pennsylvania Coalition to Advance Respect","email":"media@pcar.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-150"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"Violence Free Colorado","email":"communityimpact@violencefreeco.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-151"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"arizona coalition to end sexual and domestic violence","email":"info@acesdv.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-152"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"california partnership to end domestic violence","email":"communications@cpedv.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-153"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"illinois coalition against sexual assault","email":"icasanews@icasa.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-154"},{"t":2,"cat":"State DV/SA Coalitions","sub":"State coalition","org":"ohio alliance to end sexual violence","email":"info@oaesv.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-155"},{"t":2,"cat":"Survivor & Family Support","sub":"Family-of-survivor org","org":"Mothers of Sexually Abused Children","email":"mel@mellangston.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-156"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Local youth org","org":"Compton Girls Club","email":"partnerships@hello-girl.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-157"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"Local youth org","org":"Project Youth OC","email":"info@pyoc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-158"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YMCA","org":"YMCA","email":"partnerships@ymca.net","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-159"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YMCA","org":"YMCA Houston","email":"ymember@ymcaeastbay.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-160"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YMCA","org":"YMCA LA","email":"christinabragg@ymcala.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-161"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YMCA","org":"YMCA NYC","email":"Harlem@ymcanyc.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-162"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YMCA","org":"YMCA Philly","email":"Tania.Labry@ymcahouston.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-163"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YWCA","org":"YWCA","email":"communications@ywca.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-164"},{"t":2,"cat":"Youth Orgs (Y, Scouts, etc.)","sub":"YWCA","org":"YWCA Chicago","email":"info@ywcachicago.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-165"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"Brea Library","email":"ocpl.brea@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-166"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"Laguna Niguel Library","email":"ocpl.lagunaniguel@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-167"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"Laguna Woods Library","email":"ocpl.lagunawoods@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-168"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"Library of the Canyons","email":"marilyn.diebold@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-169"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"Los Alamitos Rossmoor Library","email":"ocpl.lar@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-170"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"Rancho Santa Margarita Library","email":"ocpl.rsm@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-171"},{"t":3,"cat":"Libraries","sub":"Local OC library","org":"San Clemente Library","email":"melissa.dolby@occr.ocgov.com","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-172"},{"t":3,"cat":"Other (review & re-categorize)","sub":"Uncategorized","org":"UC Berkeley Gender and Women's Studies","name":"Sandy Richmond","title":"Director of Administration","email":"sandyjbr@berkeley.edu","status":"Not yet contacted","stage":"Cold","nextAction":"Draft personalized outreach","src":"Existing list (Tiffany)","sheet":"org","id":"org-173"},{"t":3,"cat":"Survivor & Family Support","sub":"12-step / family of addict","org":"S-Anon Support Group","email":"sanon@sanon.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-174"},{"t":3,"cat":"Survivor & Family Support","sub":"12-step / family of addict","org":"S-Ateen","email":"s-ateen@sanon.org","status":"Not yet contacted","stage":"Cold","nextAction":"Research / find named contact","src":"Existing list (Tiffany)","sheet":"org","id":"org-175"}],"colleges":[{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Albany State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-0"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Bowie State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-1"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Clark Atlanta University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-2"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Delaware State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-3"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Fayetteville State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-4"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Howard University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-5"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"North Carolina A&T State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-6"},{"t":1,"cat":"4-year colleges","sub":"Tiffany alma mater","org":"Northwestern University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-7"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Spelman College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-8"},{"t":1,"cat":"4-year colleges","sub":"Illustrator alma mater","org":"Washington State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-9"},{"t":1,"cat":"4-year colleges","sub":"HBCU","org":"Xavier University of Louisiana","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-10"},{"t":1,"cat":"Pre-college / Pipeline orgs","sub":"College pipeline org (precollege)","org":"100 Black Men of OC","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-11"},{"t":1,"cat":"Pre-college / Pipeline orgs","sub":"College pipeline org (precollege)","org":"Delta Gems","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-12"},{"t":1,"cat":"Pre-college / Pipeline orgs","sub":"College pipeline org (precollege)","org":"Jack and Jill","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-13"},{"t":1,"cat":"Pre-college / Pipeline orgs","sub":"College pipeline org (precollege)","org":"Willow Tree Couseling","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-14"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"American University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-15"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Arizona State University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-16"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Boston University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-17"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Chapman University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-18"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Duke University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-19"},{"t":2,"cat":"4-year colleges","sub":"Catholic / Jesuit university (faith angle)","org":"Loyola Marymount University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-20"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"New York University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-21"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Occidental College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-22"},{"t":2,"cat":"4-year colleges","sub":"Catholic / Jesuit university (faith angle)","org":"Pepperdine University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-23"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Pitzer College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-24"},{"t":2,"cat":"4-year colleges","sub":"Catholic / Jesuit university (faith angle)","org":"Santa Clara University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-25"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"Standford University","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-26"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"University of Florida","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-27"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"University of Maryland","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-28"},{"t":2,"cat":"4-year colleges","sub":"Catholic / Jesuit university (faith angle)","org":"University of San Diego","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-29"},{"t":2,"cat":"4-year colleges","sub":"4-year college","org":"University of Southern California","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-30"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"East Los Angeles College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-31"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"Fullerton College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-32"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"Irvine Valley Community College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-33"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"Long Beach City College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-34"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"Los Angeles City College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-35"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"Pasadena City College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-36"},{"t":3,"cat":"Community colleges (CA)","sub":"Community college","org":"Santa Monica College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-37"},{"t":3,"cat":"Community colleges (non-CA)","sub":"Community college","org":"City Colleges of Chicago","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-38"},{"t":3,"cat":"Community colleges (non-CA)","sub":"Community college","org":"Houston Community College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-39"},{"t":3,"cat":"Community colleges (non-CA)","sub":"Community college","org":"Miami Dade College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-40"},{"t":3,"cat":"Community colleges (non-CA)","sub":"Community college","org":"Northern Virginia Community College","status":"Not yet contacted","stage":"Needs research","nextAction":"Identify Title IX coordinator OR Dean of Students OR Health Education Director","src":"Existing list (Tiffany shortlist)","sheet":"col","id":"col-41"}],"parentMedia":[{"t":1,"cat":"High-reach outlet/podcast","org":"Armchair Expert Podcast","name":"Dax Sheppard","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-0"},{"t":1,"cat":"High-reach outlet/podcast","org":"Armchair Expert Podcast","name":"Rob Holysz","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-1"},{"t":1,"cat":"High-reach outlet/podcast","org":"Ask Lisa","name":"Lisa Damour","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-2"},{"t":1,"cat":"High-reach outlet/podcast","org":"Fatherly","name":"Ryan Britt","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-3"},{"t":1,"cat":"High-reach outlet/podcast","org":"Full Tilt Parenting","name":"Debbie Reber","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-4"},{"t":1,"cat":"High-reach outlet/podcast","org":"Good Inside with Dr. Becky","name":"Dr. Becky","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-5"},{"t":1,"cat":"High-reach outlet/podcast","org":"How To Talk to Kids About Anything","name":"Dr. Robyn Silverman","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-6"},{"t":1,"cat":"High-reach outlet/podcast","org":"HuffPost","name":"Natasha Hinde","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-7"},{"t":1,"cat":"High-reach outlet/podcast","org":"Is My Kid The Asshole? Substack","name":"Melinda Wenner Moyer","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-8"},{"t":1,"cat":"High-reach outlet/podcast","org":"Literary Hub","name":"Amanda Morgan","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-9"},{"t":1,"cat":"High-reach outlet/podcast","org":"Literary Hub","name":"THAO THAI","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-10"},{"t":1,"cat":"High-reach outlet/podcast","org":"Mindful Mama","name":"Hunter Clarke-Fields","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-11"},{"t":1,"cat":"High-reach outlet/podcast","org":"NPR Life Kit","name":"Andee Tagle","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-12"},{"t":1,"cat":"High-reach outlet/podcast","org":"Parents","name":"Grace Bastidas","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-13"},{"t":1,"cat":"High-reach outlet/podcast","org":"Parents","name":"Anna Halkidis","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-14"},{"t":1,"cat":"High-reach outlet/podcast","org":"Raising Good Humans","name":"Dr. Aliza Pressman","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-15"},{"t":1,"cat":"High-reach outlet/podcast","org":"Romper","name":"Jamie Kenney","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-16"},{"t":1,"cat":"High-reach outlet/podcast","org":"Scary Mommy","name":"Julie Sprankles","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-17"},{"t":1,"cat":"High-reach outlet/podcast","org":"Today","name":"Rachel Colosi","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-18"},{"t":1,"cat":"High-reach outlet/podcast","org":"Upworthy","name":"Annie Reneau","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-19"},{"t":1,"cat":"High-reach outlet/podcast","org":"Us Weekly","name":"Shelby Stivale","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-20"},{"t":1,"cat":"High-reach outlet/podcast","org":"Us Weekly","name":"Leigh Zullo","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-21"},{"t":1,"cat":"High-reach outlet/podcast","org":"Where Parents Talk","name":"Liane Castelino","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-22"},{"t":2,"cat":"Parenting podcast/outlet","org":"Atlanta Parent Magazine","name":"Liz White","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-23"},{"t":2,"cat":"Parenting podcast/outlet","org":"Dadville Podcast","name":"Jon McLaughlin","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-24"},{"t":2,"cat":"Faith-aligned outlet (consent + values angle)","org":"Focus on the Family Podcast","name":"Andrea Gutierrez","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-25"},{"t":2,"cat":"Faith-aligned outlet (consent + values angle)","org":"Focus on the Family Podcast","name":"Jim Daly","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-26"},{"t":2,"cat":"Faith-aligned outlet (consent + values angle)","org":"Focus on the Family Podcast","name":"Juliette Hayes","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-27"},{"t":2,"cat":"Faith-aligned outlet (consent + values angle)","org":"Focus on the Family Podcast","name":"PeggySue Wells","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-28"},{"t":2,"cat":"Parenting podcast/outlet","org":"Freelance","name":"Lauren Wellbank","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-29"},{"t":2,"cat":"Parenting podcast/outlet","org":"Language Arts","name":"Rebecca Woodard","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-30"},{"t":2,"cat":"Parenting podcast/outlet","org":"Longest Shortest Time","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-31"},{"t":2,"cat":"Parenting podcast/outlet","org":"Mom and Dad Are Fighting","name":"Elizabeth Newcamp","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-32"},{"t":2,"cat":"Parenting podcast/outlet","org":"No Guilt Mom","name":"Brie","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-33"},{"t":2,"cat":"Parenting podcast/outlet","org":"Parenting Teens and Tweens","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-34"},{"t":2,"cat":"Parenting podcast/outlet","org":"Paternal Podcast","name":"Nick Firchau","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-35"},{"t":2,"cat":"Parenting podcast/outlet","org":"Power Your Parenting","name":"Colleen O'Grady","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-36"},{"t":2,"cat":"Parenting podcast/outlet","org":"Raising Boys and Girls","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-37"},{"t":2,"cat":"Parenting podcast/outlet","org":"St. Louis Mom","name":"Carol Kerber","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-38"},{"t":2,"cat":"Parenting podcast/outlet","org":"Sunshine Parenting Podcast","name":"Audrey Monke","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-39"},{"t":2,"cat":"Parenting podcast/outlet","org":"Talking to Teens","name":"Virginia Combs","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-40"},{"t":2,"cat":"Parenting podcast/outlet","org":"The Mamas Den","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-41"},{"t":2,"cat":"Parenting podcast/outlet","org":"The Motherly Podcast","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-42"},{"t":2,"cat":"Parenting podcast/outlet","org":"The Survival Mom","name":"Lisa Bedford","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-43"},{"t":2,"cat":"Parenting podcast/outlet","org":"Uh-Parently Podcast","name":"Tracy Weiner","pitch":"Parents Conversation Kit + author interview","status":"Not yet contacted","stage":"Cold","nextAction":"Find email/booking contact + tailor pitch","sheet":"pm","id":"pm-44"}],"selfCareMedia":[{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"A Really Good Cry","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-0"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"A Really Good Cry","name":"Radhi Devlukia","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-1"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Baby this is Keke Palmer","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-2"},{"t":1,"cat":"Black women / cultural-specific wellness","org":"Black Girl Burnout","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-3"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Getting Better with Jonathan Van Ness","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-4"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Health","name":"Vera Sizensky","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-5"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"HuffPost","name":"Jillian Wilson","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-6"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Let's Try This Again wtih B. Simone","name":"B. Simone","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-7"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Mashable","name":"Anna Rose Lovine","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-8"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Mel Robbins Podcast","name":"Mel Robbins","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-9"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Mentally Stronger Podcast","name":"Amy Morin","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-10"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Parade Magazine","name":"Jessica Sager","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-11"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Parade Magazine","name":"Danielle Sinay","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-12"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"The Will To Change Podcast","name":"Jennifer Brown","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-13"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"Therapy for Black Girls","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-14"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"U.S. News Health","name":"Gretel Schueller","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-15"},{"t":1,"cat":"High-reach wellness/mental-health outlet","org":"USA Today","name":"Laura Trujillo","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-16"},{"t":2,"cat":"Wellness/mental health outlet","org":"Dr. Sheryl's Podcouch","name":"Dr. Sheryl Ziegler","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-17"},{"t":2,"cat":"Wellness/mental health outlet","org":"Everybody's Crazy","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-18"},{"t":2,"cat":"Wellness/mental health outlet","org":"Healing Trauma Podcast","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-19"},{"t":2,"cat":"Wellness/mental health outlet","org":"Hysteria Podcast","name":"Erin Gloria Ryan","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-20"},{"t":2,"cat":"Wellness/mental health outlet","org":"Keep It Positive Sweetie","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-21"},{"t":2,"cat":"Wellness/mental health outlet","org":"PureWow","name":"Marissa Wu","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-22"},{"t":2,"cat":"Wellness/mental health outlet","org":"WGN","name":"Kristina Miller","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-23"},{"t":2,"cat":"Wellness/mental health outlet","org":"Woman's World","name":"Kristina Mastrocola","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-24"},{"t":2,"cat":"Wellness/mental health outlet","org":"Woman's World","name":"Cailey Griffin","pitch":"Survivor → educator story + Empowered Yes framework","status":"Not yet contacted","stage":"Cold","nextAction":"Find booking contact / tailor pitch","sheet":"sc","id":"sc-25"}],"gaps":[{"status":"Research needed","cat":"Foundations & Funders","org":"Verizon Foundation","why":"Funds DV prevention, has long-running HopeLine program","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-0"},{"status":"Research needed","cat":"Foundations & Funders","org":"Allstate Foundation","why":"Purple Purse — major DV / financial empowerment funder","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-1"},{"status":"Research needed","cat":"Foundations & Funders","org":"Avon Foundation for Women","why":"Speak Out — DV grant programs","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-2"},{"status":"Research needed","cat":"Foundations & Funders","org":"Mary Kay Ash Foundation","why":"DV shelter funding + survivor support","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-3"},{"status":"Research needed","cat":"Foundations & Funders","org":"NoVo Foundation","why":"Major funder of women/girls + ending violence work","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-4"},{"status":"Research needed","cat":"Foundations & Funders","org":"Ms. Foundation for Women","why":"Survivor-centered grantmaking","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-5"},{"status":"Research needed","cat":"Foundations & Funders","org":"Robert Wood Johnson Foundation","why":"Health + youth wellbeing grants","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-6"},{"status":"Research needed","cat":"Foundations & Funders","org":"W.K. Kellogg Foundation","why":"Children, families, education","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-7"},{"status":"Research needed","cat":"Foundations & Funders","org":"Women's Funding Network","why":"Aggregator of women's foundations nationwide","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-8"},{"status":"Research needed","cat":"Foundations & Funders","org":"California Wellness Foundation","why":"CA-focused — aligns with hometown beachhead","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-9"},{"status":"Research needed","cat":"Foundations & Funders","org":"NEA Foundation","why":"Education grants — ties to curriculum side","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-10"},{"status":"Research needed","cat":"Foundations & Funders","org":"Bezos Family Foundation","why":"Adolescent development + education","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-11"},{"status":"Research needed","cat":"Foundations & Funders","org":"OneSky Foundation / Plan International","why":"Youth empowerment — global reach","priority":"Low","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-12"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Athleta (Gap Inc.)","why":"Power of She — empowerment marketing aligned","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-13"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Dove (Unilever — Self-Esteem Project)","why":"Self-esteem + body positivity curriculum","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-14"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Always (P&G — End Period Poverty)","why":"Girls confidence & education","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-15"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Olay (P&G — Face Anything)","why":"Empowerment angle","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-16"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Bumble Foundation","why":"Already on list — but Foundation arm specifically funds anti-violence","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-17"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Match Group Advisory Council","why":"Cross-platform safety initiatives","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-18"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Lyft / Uber safety teams","why":"Driver/rider safety education partnerships","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-19"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Glamour / Conde Nast","why":"Women of the Year platform + media reach","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-20"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Sephora Stands","why":"Social impact arm of Sephora","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-21"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Aerie REAL Foundation","why":"Body confidence + self-esteem angle","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-22"},{"status":"Research needed","cat":"Corporate Sponsors","org":"Ulta Beauty Charitable Foundation","why":"Funds women's & girls' empowerment","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-23"},{"status":"Research needed","cat":"Corporate Sponsors","org":"lululemon Centre for Social Impact","why":"Wellbeing + mental health funding","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-24"},{"status":"Research needed","cat":"Warm-Intro Nodes (from book credits)","org":"Dr. Brendan Kwiatkowski-Hartman / Remasculine","why":"Editorial consultant ON THE BOOK — direct entry to male-focused educator network, fraternities, athletic depts, faith communities","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-25"},{"status":"Research needed","cat":"Warm-Intro Nodes (from book credits)","org":"Rita Smith — National DV Expert","why":"On the book — has decades of national DV org connections","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-26"},{"status":"Research needed","cat":"Warm-Intro Nodes (from book credits)","org":"Dr. Judie Lomax — Gallaudet U Counseling","why":"On the book — direct line to Gallaudet (THE Deaf university) + Deaf community orgs","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-27"},{"status":"Research needed","cat":"Warm-Intro Nodes (from book credits)","org":"Dr. Skip Speer — Clinical Sexologist","why":"On the book — sexologist association warm intros","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-28"},{"status":"Research needed","cat":"Warm-Intro Nodes (from book credits)","org":"Deborah Saenz — Editor","why":"May have publishing/distribution contacts","priority":"Low","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-29"},{"status":"Research needed","cat":"Conferences & Speaking","org":"National Sexual Assault Conference (already on list)","why":"Confirm slot + get on speaker roster","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-30"},{"status":"Research needed","cat":"Conferences & Speaking","org":"NCAA Convention — Health & Safety track","why":"College sports adoption pipeline","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-31"},{"status":"Research needed","cat":"Conferences & Speaking","org":"NASPA (Student Affairs Administrators)","why":"Title IX + student affairs national audience","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-32"},{"status":"Research needed","cat":"Conferences & Speaking","org":"ATIXA (Title IX Administrators)","why":"Title IX audience nationwide","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-33"},{"status":"Research needed","cat":"Conferences & Speaking","org":"NAESP / NASSP (K-12 principal associations)","why":"School curriculum adoption","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-34"},{"status":"Research needed","cat":"Conferences & Speaking","org":"ASCA (American School Counselor Association)","why":"Counselors are decision-makers for SEL curriculum","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-35"},{"status":"Research needed","cat":"Conferences & Speaking","org":"SXSW EDU","why":"Curriculum + ed-tech visibility","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-36"},{"status":"Research needed","cat":"Conferences & Speaking","org":"AERA (American Educational Research Association)","why":"Curriculum credibility","priority":"Low","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-37"},{"status":"Research needed","cat":"Faith-Aligned Partners","org":"Catholic Theological Society of America","why":"Already 5 Catholic theologians on list — formalize via the society","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-38"},{"status":"Research needed","cat":"Faith-Aligned Partners","org":"United Methodist Women","why":"Active social justice + women's rights tradition","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-39"},{"status":"Research needed","cat":"Faith-Aligned Partners","org":"Jewish Women International (already on list)","why":"Confirmed in existing list — Tier 1 prioritize","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-40"},{"status":"Research needed","cat":"Faith-Aligned Partners","org":"Muslim Women's Alliance / Sound Vision","why":"Underrepresented in DV ed conversations","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-41"},{"status":"Research needed","cat":"Faith-Aligned Partners","org":"Focus on the Family (already on parent media list)","why":"Conservative Christian audience — Tiffany's \"Letter to Guys\" + non-shaming approach travels here","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-42"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"Common Sense Media","why":"Reviews + curriculum endorsements — gateway to school adoption","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-43"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"CASEL (SEL framework)","why":"Curriculum needs SEL alignment for K-12 sales","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-44"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"Edutopia (George Lucas Educational Foundation)","why":"Educator media reach","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-45"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"Teaching Tolerance / Learning for Justice","why":"Free curriculum distribution to teachers","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-46"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"PBS Kids / PBS Learning Media","why":"Distribution of \"Ask First\" type elementary content","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-47"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"Scholastic","why":"Book distribution to schools","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-48"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"GoldieBlox / Mighty Girl","why":"Aligned brands for cross-promotion","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-49"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"me too. International","why":"Survivor-led movement org","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-50"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"EVERFI (digital curriculum at scale)","why":"Already runs sexual assault prevention courses on campuses — partnership or competitor","priority":"High","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-51"},{"status":"Research needed","cat":"Additional Strategic Gaps","org":"Vector Solutions / Campus Clarity","why":"Same space — partnership or competitive intel","priority":"Medium","nextAction":"Identify named contact + tailor angle","sheet":"gap","id":"gap-52"}]};

// === BRAND TOKENS — comic book vibe ===
const COLORS = {
  bg: "#FFF8E7",
  bgDark: "#1A0F2E",
  ink: "#0D0D0D",
  paper: "#FFFEF7",
  primary: "#7C3AED",      // electric purple
  primaryDark: "#5B21B6",
  pink: "#EC4899",
  green: "#10B981",
  gold: "#F59E0B",
  red: "#EF4444",
  blue: "#3B82F6",
  cream: "#FEF3C7",
  pop: "#FACC15",
};

// === LOCALSTORAGE SHIM ===
// Emulates the storage API used by the original Claude artifact,
// so we can run this as a standalone Vite + React app on Vercel.
const storage = {
  async get(key) {
    try {
      const v = localStorage.getItem(key);
      return v != null ? { value: v } : null;
    } catch (e) {
      return null;
    }
  },
  async set(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  },
};

// === STORAGE HELPERS ===
const STORAGE_KEY_RECORDS = "cc_records_v1";
const STORAGE_KEY_VIEW = "cc_view_v1";
const STORAGE_KEY_ADDED = "cc_added_contacts_v1";
const STORAGE_KEY_ROADMAP = "cc_roadmap_v1";

async function loadRecordPatches() {
  try {
    const result = await storage.get(STORAGE_KEY_RECORDS);
    return result?.value ? JSON.parse(result.value) : {};
  } catch (e) {
    return {};
  }
}

async function saveRecordPatches(patches) {
  try {
    await storage.set(STORAGE_KEY_RECORDS, JSON.stringify(patches));
  } catch (e) {
    console.error("save failed", e);
  }
}

async function loadAddedContacts() {
  try {
    const result = await storage.get(STORAGE_KEY_ADDED);
    return result?.value ? JSON.parse(result.value) : { organizations: [], colleges: [], parentMedia: [], selfCareMedia: [], gaps: [] };
  } catch (e) {
    return { organizations: [], colleges: [], parentMedia: [], selfCareMedia: [], gaps: [] };
  }
}

async function saveAddedContacts(added) {
  try {
    await storage.set(STORAGE_KEY_ADDED, JSON.stringify(added));
  } catch (e) {
    console.error("save added failed", e);
  }
}

async function loadRoadmapState() {
  try {
    const result = await storage.get(STORAGE_KEY_ROADMAP);
    return result?.value ? JSON.parse(result.value) : { completed: {}, expandedPhases: { p1: true, p2: false, p3: false } };
  } catch (e) {
    return { completed: {}, expandedPhases: { p1: true, p2: false, p3: false } };
  }
}

async function saveRoadmapState(state) {
  try {
    await storage.set(STORAGE_KEY_ROADMAP, JSON.stringify(state));
  } catch (e) {
    console.error("save roadmap failed", e);
  }
}

// Pipeline stages
const STAGES = [
  "Cold",
  "Researching",
  "Outreach drafted",
  "1st touch sent",
  "Follow-up sent",
  "Conversation",
  "Demo/Call booked",
  "Pilot/Partnership",
  "Won",
  "Closed lost",
];

const STATUSES = [
  "Not yet contacted",
  "Researching",
  "Drafted - awaiting send",
  "Sent",
  "Replied - interested",
  "Replied - not now",
  "Replied - declined",
  "Booked call",
  "In partnership",
  "Closed lost",
];

const STAGE_COLORS = {
  "Cold": "#94A3B8",
  "Researching": "#3B82F6",
  "Outreach drafted": "#8B5CF6",
  "1st touch sent": "#F59E0B",
  "Follow-up sent": "#F97316",
  "Conversation": "#EC4899",
  "Demo/Call booked": "#A855F7",
  "Pilot/Partnership": "#10B981",
  "Won": "#059669",
  "Closed lost": "#6B7280",
};

const TIER_BADGES = {
  1: { label: "TIER 1", bg: "#10B981", color: "white" },
  2: { label: "TIER 2", bg: "#F59E0B", color: "#0D0D0D" },
  3: { label: "TIER 3", bg: "#EC4899", color: "white" },
};

// === MAIN APP ===
export default function App() {
  const [view, setView] = useState("internal"); // 'internal' | 'pitch'
  const [patches, setPatches] = useState({});
  const [added, setAdded] = useState({ organizations: [], colleges: [], parentMedia: [], selfCareMedia: [], gaps: [] });
  const [loading, setLoading] = useState(true);

  // Hydrate persisted edits on mount
  useEffect(() => {
    (async () => {
      const p = await loadRecordPatches();
      setPatches(p);
      const a = await loadAddedContacts();
      setAdded(a);
      try {
        const v = await storage.get(STORAGE_KEY_VIEW);
        if (v?.value) setView(v.value);
      } catch {}
      setLoading(false);
    })();
  }, []);

  // Persist view choice
  useEffect(() => {
    if (loading) return;
    storage?.set(STORAGE_KEY_VIEW, view).catch(() => {});
  }, [view, loading]);

  // Apply patches to records
  const applyPatch = useCallback((id, field, value) => {
    setPatches((prev) => {
      const next = {
        ...prev,
        [id]: { ...(prev[id] || {}), [field]: value },
      };
      saveRecordPatches(next);
      return next;
    });
  }, []);

  const resetRecord = useCallback((id) => {
    setPatches((prev) => {
      const next = { ...prev };
      delete next[id];
      saveRecordPatches(next);
      return next;
    });
  }, []);

  // Add a new user-created contact to a given sheet
  const addContact = useCallback((sheetKey, record) => {
    setAdded((prev) => {
      const id = `${record.sheet || "org"}-user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const newRec = { ...record, id, isUserAdded: true };
      const next = {
        ...prev,
        [sheetKey]: [newRec, ...(prev[sheetKey] || [])],
      };
      saveAddedContacts(next);
      return next;
    });
  }, []);

  // Delete a user-added contact (originals can't be deleted)
  const deleteAddedContact = useCallback((sheetKey, id) => {
    setAdded((prev) => {
      const next = {
        ...prev,
        [sheetKey]: (prev[sheetKey] || []).filter((r) => r.id !== id),
      };
      saveAddedContacts(next);
      return next;
    });
    // Also clear any patches on this record
    setPatches((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      saveRecordPatches(next);
      return next;
    });
  }, []);

  const allRecords = useMemo(() => {
    const merge = (records, addedRecords) => {
      // Apply patches to all records, prepend user-added (most recent on top)
      const userAdded = (addedRecords || []).map((r) => ({ ...r, ...(patches[r.id] || {}) }));
      const original = records.map((r) => ({ ...r, ...(patches[r.id] || {}) }));
      return [...userAdded, ...original];
    };
    return {
      organizations: merge(RAW_DATA.organizations, added.organizations),
      colleges: merge(RAW_DATA.colleges, added.colleges),
      parentMedia: merge(RAW_DATA.parentMedia, added.parentMedia),
      selfCareMedia: merge(RAW_DATA.selfCareMedia, added.selfCareMedia),
      gaps: merge(RAW_DATA.gaps, added.gaps),
    };
  }, [patches, added]);

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: COLORS.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Bangers', 'Impact', sans-serif",
        fontSize: 32,
        color: COLORS.primary,
        letterSpacing: "0.05em",
      }}>
        LOADING THE CRM…
      </div>
    );
  }

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <FontLoader />
      <style>{globalStyles}</style>
      <ViewSwitcher view={view} setView={setView} />
      {view === "internal" ? (
        <InternalCRM
          data={allRecords}
          applyPatch={applyPatch}
          resetRecord={resetRecord}
          patches={patches}
          addContact={addContact}
          deleteAddedContact={deleteAddedContact}
        />
      ) : (
        <PitchView />
      )}
    </div>
  );
}

// ==========================================================
// FONT LOADER
// ==========================================================
function FontLoader() {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=Bangers&family=Bowlby+One&family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  );
}

const globalStyles = `
  body { margin: 0; }
  * { box-sizing: border-box; }
  .display-font { font-family: 'Bangers', 'Bowlby One', 'Impact', sans-serif; letter-spacing: 0.04em; }
  .blocky-font { font-family: 'Bowlby One', 'Impact', sans-serif; letter-spacing: 0.02em; }
  .body-font { font-family: 'Inter', system-ui, sans-serif; }

  /* Comic burst background */
  .comic-burst {
    background-image:
      repeating-conic-gradient(from 0deg at 50% 50%,
        rgba(255,255,255,0) 0deg,
        rgba(255,255,255,0) 8deg,
        rgba(255,255,255,0.06) 8deg,
        rgba(255,255,255,0.06) 16deg);
  }
  .halftone {
    background-image: radial-gradient(circle, rgba(0,0,0,0.13) 1px, transparent 1px);
    background-size: 8px 8px;
  }

  /* Comic panel border */
  .comic-panel {
    border: 3px solid #0D0D0D;
    box-shadow: 6px 6px 0 #0D0D0D;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .comic-panel-thin {
    border: 2px solid #0D0D0D;
    box-shadow: 3px 3px 0 #0D0D0D;
  }
  .comic-panel-hover:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #0D0D0D;
  }
  .comic-button {
    border: 2.5px solid #0D0D0D;
    box-shadow: 3px 3px 0 #0D0D0D;
    transition: all 0.1s;
    cursor: pointer;
    font-family: 'Bowlby One', 'Impact', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .comic-button:hover {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0 #0D0D0D;
  }
  .comic-button:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0 #0D0D0D;
  }
  .pill {
    display: inline-block;
    padding: 3px 9px;
    border: 2px solid #0D0D0D;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: white;
  }

  /* scrollbar styling */
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: #FEF3C7; }
  ::-webkit-scrollbar-thumb { background: #7C3AED; border: 2px solid #FEF3C7; border-radius: 5px; }

  /* burst rays for headers */
  .ray-bg {
    background:
      conic-gradient(from 0deg at 50% 50%,
        #7C3AED 0deg, #7C3AED 18deg,
        #5B21B6 18deg, #5B21B6 36deg);
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(-1.5deg); }
    50% { transform: rotate(1.5deg); }
  }
  .wiggle { animation: wiggle 2.5s ease-in-out infinite; }

  @keyframes pop {
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }
  .pop-in { animation: pop 0.4s ease-out; }

  /* Speech bubble */
  .speech-bubble {
    position: relative;
    background: white;
    border: 3px solid #0D0D0D;
    border-radius: 20px;
    padding: 14px 20px;
  }
  .speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 30px;
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 18px solid white;
    z-index: 2;
  }
  .speech-bubble::before {
    content: '';
    position: absolute;
    bottom: -22px;
    left: 27px;
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-top: 22px solid #0D0D0D;
    z-index: 1;
  }

  details > summary { list-style: none; cursor: pointer; }
  details > summary::-webkit-details-marker { display: none; }

  /* Editable input style */
  .ce-input {
    border: 2px solid transparent;
    background: rgba(255,255,255,0.7);
    padding: 4px 8px;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 12px;
    border-radius: 6px;
    transition: all 0.12s;
    width: 100%;
  }
  .ce-input:hover { border-color: #7C3AED; background: white; }
  .ce-input:focus { border-color: #7C3AED; background: white; outline: none; box-shadow: 0 0 0 3px rgba(124,58,237,0.15); }
`;

// ==========================================================
// VIEW SWITCHER (header)
// ==========================================================
function ViewSwitcher({ view, setView }) {
  return (
    <header style={{
      background: COLORS.bgDark,
      borderBottom: `4px solid ${COLORS.ink}`,
      position: "sticky",
      top: 0,
      zIndex: 50,
      boxShadow: "0 4px 0 #0D0D0D, 0 8px 16px rgba(0,0,0,0.2)",
    }}>
      <div className="halftone" style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.pink} 100%)`,
        padding: "14px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="comic-burst" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          position: "relative",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44,
              height: 44,
              background: COLORS.pop,
              border: `3px solid ${COLORS.ink}`,
              boxShadow: `3px 3px 0 ${COLORS.ink}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bowlby One', 'Impact', sans-serif",
              fontSize: 18,
              color: COLORS.ink,
              letterSpacing: "-0.04em",
              transform: "rotate(-3deg)",
              flexShrink: 0,
            }}>CC</div>
            <div>
              <div className="display-font" style={{
                fontSize: 28,
                color: "white",
                lineHeight: 1,
                textShadow: "3px 3px 0 #0D0D0D",
              }}>
                CONSENT COMICS
              </div>
              <div className="blocky-font" style={{
                fontSize: 11,
                color: COLORS.pop,
                marginTop: 4,
                textTransform: "uppercase",
                textShadow: "1px 1px 0 #0D0D0D",
              }}>
                Partnerships Command Center
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <SwitchBtn active={view === "internal"} onClick={() => setView("internal")} label="CRM Tracker" sub="Internal" />
            <SwitchBtn active={view === "pitch"} onClick={() => setView("pitch")} label="Partner Pitch" sub="Public-facing" />
          </div>
        </div>
      </div>
    </header>
  );
}

function SwitchBtn({ active, onClick, label, sub }) {
  return (
    <button
      onClick={onClick}
      className="comic-button"
      style={{
        background: active ? COLORS.pop : "white",
        color: COLORS.ink,
        padding: "10px 16px",
        fontSize: 14,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div>{label}</div>
      <div style={{
        fontSize: 9,
        fontFamily: "'Inter', system-ui",
        fontWeight: 600,
        opacity: 0.7,
        letterSpacing: "0.08em",
        marginTop: 2,
      }}>
        {sub.toUpperCase()}
      </div>
    </button>
  );
}



// ==========================================================
// ADD-CONTACT FORM SCHEMAS
// Each sheet has its own form. Fields render in order.
// ==========================================================
const ORG_FORM_FIELDS = [
  { key: "org", label: "Organization name", required: true, placeholder: "e.g. RAINN" },
  { key: "cat", label: "Category", type: "select", options: [
    "DV/SA National Orgs", "State DV/SA Coalitions", "OC-Local DV Orgs (hometown beachhead)",
    "Youth Orgs (Y, Scouts, etc.)", "K-12 Schools (CA local beachhead)",
    "Colleges — Title IX / Gender Studies", "Colleges — Women's Centers", "Colleges — HBCUs",
    "Colleges — Health Services", "College Greek Life",
    "Deaf Community Orgs", "Culturally-Specific Orgs", "Faith Communities",
    "Mental Health / Counseling Pros", "Parent Orgs", "Survivor & Family Support",
    "Sports & Military", "Brand/Corporate Partners", "Aligned Media/Education",
    "Conferences", "Libraries", "Other"
  ]},
  { key: "sub", label: "Sub-Category", placeholder: "Optional — e.g. State coalition" },
  { key: "name", label: "Contact name", placeholder: "First Last" },
  { key: "title", label: "Title / Role", placeholder: "e.g. Executive Director" },
  { key: "email", label: "Email", type: "email", placeholder: "name@org.com" },
  { key: "form", label: "Contact form / URL", placeholder: "Optional" },
  { key: "t", label: "Tier", type: "select", options: ["1", "2", "3"], default: "2" },
  { key: "stage", label: "Stage", type: "select", options: STAGES, default: "Cold" },
  { key: "status", label: "Status", type: "select", options: STATUSES, default: "Not yet contacted" },
  { key: "nextAction", label: "Next Action", placeholder: "What's the immediate next step?" },
  { key: "notes", label: "Notes", type: "textarea", placeholder: "Anything else worth remembering" },
  { key: "src", label: "Source / How Found", placeholder: "How did you find this contact?", default: "Added by you" },
];

const COLLEGE_FORM_FIELDS = [
  { key: "org", label: "Institution name", required: true, placeholder: "e.g. Spelman College" },
  { key: "cat", label: "Section", type: "select", options: [
    "4-year colleges", "Pre-college / Pipeline orgs",
    "Community colleges (CA)", "Community colleges (non-CA)"
  ], default: "4-year colleges" },
  { key: "sub", label: "Sub-Category", placeholder: "e.g. HBCU, Catholic, R1, etc." },
  { key: "office", label: "Target Office", placeholder: "Title IX, Dean of Students, Health Ed…" },
  { key: "name", label: "Contact name", placeholder: "First Last" },
  { key: "title", label: "Title / Role" },
  { key: "email", label: "Email", type: "email" },
  { key: "t", label: "Tier", type: "select", options: ["1", "2", "3"], default: "2" },
  { key: "stage", label: "Stage", type: "select", options: STAGES, default: "Cold" },
  { key: "status", label: "Status", type: "select", options: STATUSES, default: "Not yet contacted" },
  { key: "nextAction", label: "Next Action", placeholder: "Identify Title IX coordinator, etc." },
  { key: "notes", label: "Notes", type: "textarea" },
  { key: "src", label: "Source / How Found", default: "Added by you" },
];

const MEDIA_FORM_FIELDS = [
  { key: "org", label: "Outlet / Show name", required: true, placeholder: "e.g. NPR Life Kit" },
  { key: "cat", label: "Type", placeholder: "e.g. Podcast, magazine, substack" },
  { key: "name", label: "Contact name", placeholder: "Host, editor, or producer" },
  { key: "title", label: "Title / Role", placeholder: "e.g. Producer, Host" },
  { key: "email", label: "Email", type: "email" },
  { key: "pitch", label: "Pitch Angle", type: "textarea", placeholder: "What's the angle for this outlet?" },
  { key: "t", label: "Tier", type: "select", options: ["1", "2", "3"], default: "2" },
  { key: "stage", label: "Stage", type: "select", options: STAGES, default: "Cold" },
  { key: "status", label: "Status", type: "select", options: STATUSES, default: "Not yet contacted" },
  { key: "notes", label: "Notes", type: "textarea" },
];

const GAP_FORM_FIELDS = [
  { key: "org", label: "Target name", required: true, placeholder: "e.g. Verizon Foundation" },
  { key: "cat", label: "Pillar", type: "select", options: [
    "Foundations & Funders", "Corporate Sponsors",
    "Warm-Intro Nodes (from book credits)", "Conferences & Speaking",
    "Faith-Aligned Partners", "Additional Strategic Gaps"
  ], default: "Foundations & Funders" },
  { key: "name", label: "Lead Contact", placeholder: "Optional" },
  { key: "why", label: "Why / Angle", type: "textarea", required: true, placeholder: "Why this is a fit and what the ask is" },
  { key: "priority", label: "Priority", type: "select", options: ["High", "Medium", "Low"], default: "Medium" },
  { key: "status", label: "Status", type: "select", options: ["Research needed", "Researching", "Lead identified", "Pitched", "In conversation", "Won", "Closed lost"], default: "Research needed" },
  { key: "nextAction", label: "Next Action", default: "Identify named contact + tailor angle" },
];


// ==========================================================
// INTERNAL CRM VIEW
// ==========================================================
function InternalCRM({ data, applyPatch, resetRecord, patches, addContact, deleteAddedContact }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const tabs = [
    { id: "dashboard", label: "Dashboard", count: null, icon: "★" },
    { id: "roadmap", label: "Roadmap", count: null, icon: "🗺" },
    { id: "organizations", label: "Organizations", count: data.organizations.length, icon: "◆" },
    { id: "colleges", label: "Colleges", count: data.colleges.length, icon: "▲" },
    { id: "parentMedia", label: "Parent Media", count: data.parentMedia.length, icon: "●" },
    { id: "selfCareMedia", label: "Self-Care Media", count: data.selfCareMedia.length, icon: "■" },
    { id: "gaps", label: "Gaps to Fill", count: data.gaps.length, icon: "✚" },
  ];

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 16px 40px" }}>
      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
      <div style={{ marginTop: 20 }}>
        {activeTab === "dashboard" && <Dashboard data={data} setActiveTab={setActiveTab} patches={patches} />}
        {activeTab === "roadmap" && <RoadmapView />}
        {activeTab === "organizations" && (
          <RecordTable
            records={data.organizations}
            sheet="org"
            sheetKey="organizations"
            applyPatch={applyPatch}
            resetRecord={resetRecord}
            patches={patches}
            addContact={addContact}
            deleteAddedContact={deleteAddedContact}
            columns={[
              { key: "t", label: "Tier", type: "tier", width: 70 },
              { key: "cat", label: "Category", type: "text", width: 180 },
              { key: "org", label: "Organization", type: "text", width: 220 },
              { key: "name", label: "Contact", type: "text", width: 140 },
              { key: "email", label: "Email", type: "email", width: 200 },
              { key: "stage", label: "Stage", type: "stage", width: 160 },
              { key: "status", label: "Status", type: "status", width: 180 },
              { key: "nextAction", label: "Next Action", type: "text", width: 200 },
              { key: "notes", label: "Notes", type: "longtext", width: 220 },
            ]}
            extraFilters={["t", "cat", "stage"]}
            addFormFields={ORG_FORM_FIELDS}
          />
        )}
        {activeTab === "colleges" && (
          <RecordTable
            records={data.colleges}
            sheet="col"
            sheetKey="colleges"
            applyPatch={applyPatch}
            resetRecord={resetRecord}
            patches={patches}
            addContact={addContact}
            deleteAddedContact={deleteAddedContact}
            columns={[
              { key: "t", label: "Tier", type: "tier", width: 70 },
              { key: "cat", label: "Section", type: "text", width: 180 },
              { key: "sub", label: "Sub-Category", type: "text", width: 180 },
              { key: "org", label: "Institution", type: "text", width: 220 },
              { key: "office", label: "Target Office", type: "text", width: 160 },
              { key: "name", label: "Contact", type: "text", width: 140 },
              { key: "stage", label: "Stage", type: "stage", width: 160 },
              { key: "status", label: "Status", type: "status", width: 180 },
              { key: "nextAction", label: "Next Action", type: "text", width: 220 },
              { key: "notes", label: "Notes", type: "longtext", width: 200 },
            ]}
            extraFilters={["t", "cat", "stage"]}
            addFormFields={COLLEGE_FORM_FIELDS}
          />
        )}
        {activeTab === "parentMedia" && (
          <RecordTable
            records={data.parentMedia}
            sheet="pm"
            sheetKey="parentMedia"
            applyPatch={applyPatch}
            resetRecord={resetRecord}
            patches={patches}
            addContact={addContact}
            deleteAddedContact={deleteAddedContact}
            columns={[
              { key: "t", label: "Tier", type: "tier", width: 70 },
              { key: "cat", label: "Type", type: "text", width: 200 },
              { key: "org", label: "Outlet/Show", type: "text", width: 220 },
              { key: "name", label: "Contact", type: "text", width: 160 },
              { key: "email", label: "Email", type: "email", width: 200 },
              { key: "pitch", label: "Pitch Angle", type: "text", width: 240 },
              { key: "stage", label: "Stage", type: "stage", width: 160 },
              { key: "status", label: "Status", type: "status", width: 180 },
              { key: "notes", label: "Notes", type: "longtext", width: 200 },
            ]}
            extraFilters={["t", "cat", "stage"]}
            addFormFields={MEDIA_FORM_FIELDS}
          />
        )}
        {activeTab === "selfCareMedia" && (
          <RecordTable
            records={data.selfCareMedia}
            sheet="sc"
            sheetKey="selfCareMedia"
            applyPatch={applyPatch}
            resetRecord={resetRecord}
            patches={patches}
            addContact={addContact}
            deleteAddedContact={deleteAddedContact}
            columns={[
              { key: "t", label: "Tier", type: "tier", width: 70 },
              { key: "cat", label: "Type", type: "text", width: 220 },
              { key: "org", label: "Outlet/Show", type: "text", width: 220 },
              { key: "name", label: "Contact", type: "text", width: 160 },
              { key: "email", label: "Email", type: "email", width: 200 },
              { key: "pitch", label: "Pitch Angle", type: "text", width: 240 },
              { key: "stage", label: "Stage", type: "stage", width: 160 },
              { key: "status", label: "Status", type: "status", width: 180 },
              { key: "notes", label: "Notes", type: "longtext", width: 200 },
            ]}
            extraFilters={["t", "cat", "stage"]}
            addFormFields={MEDIA_FORM_FIELDS}
          />
        )}
        {activeTab === "gaps" && <GapsView records={data.gaps} applyPatch={applyPatch} addContact={addContact} deleteAddedContact={deleteAddedContact} />}
      </div>
    </div>
  );
}

function TabBar({ tabs, active, onChange }) {
  return (
    <div style={{
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 4,
      padding: "8px",
      background: COLORS.bgDark,
      border: `3px solid ${COLORS.ink}`,
      boxShadow: `5px 5px 0 ${COLORS.ink}`,
    }}>
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className="comic-button"
          style={{
            background: active === t.id ? COLORS.pop : "white",
            color: COLORS.ink,
            padding: "8px 14px",
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 14 }}>{t.icon}</span>
          <span>{t.label}</span>
          {t.count !== null && (
            <span style={{
              fontFamily: "'Inter', system-ui",
              background: active === t.id ? COLORS.ink : COLORS.primary,
              color: "white",
              fontSize: 10,
              fontWeight: 800,
              padding: "1px 6px",
              borderRadius: 999,
              marginLeft: 2,
            }}>
              {t.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}


// ==========================================================
// DASHBOARD
// ==========================================================
function Dashboard({ data, setActiveTab, patches }) {
  const all = [
    ...data.organizations,
    ...data.colleges,
    ...data.parentMedia,
    ...data.selfCareMedia,
  ];
  const total = all.length;
  const tierCounts = { 1: 0, 2: 0, 3: 0 };
  const stageCounts = {};
  STAGES.forEach((s) => (stageCounts[s] = 0));
  all.forEach((r) => {
    if (r.t) tierCounts[r.t] = (tierCounts[r.t] || 0) + 1;
    const stage = r.stage || "Cold";
    stageCounts[stage] = (stageCounts[stage] || 0) + 1;
  });

  const contacted = all.filter(
    (r) => r.status && r.status !== "Not yet contacted"
  ).length;
  const inProgress = all.filter((r) =>
    ["Sent", "Replied - interested", "Booked call"].includes(r.status)
  ).length;
  const won = all.filter((r) => r.status === "In partnership").length;

  const editsCount = Object.keys(patches).length;

  return (
    <div>
      {/* Hero stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16,
        marginBottom: 24,
      }}>
        <BigStat label="Total Targets" value={total} color={COLORS.primary} icon="◆" />
        <BigStat label="Already Contacted" value={contacted} color={COLORS.gold} icon="►" />
        <BigStat label="In Active Pipeline" value={inProgress} color={COLORS.pink} icon="✦" />
        <BigStat label="Partnerships Won" value={won} color={COLORS.green} icon="★" />
      </div>

      {/* Roadmap promo banner */}
      <button
        onClick={() => setActiveTab("roadmap")}
        style={{
          display: "block",
          width: "100%",
          background: COLORS.bgDark,
          color: "white",
          border: `3px solid ${COLORS.ink}`,
          boxShadow: `5px 5px 0 ${COLORS.ink}`,
          padding: "18px 22px",
          marginBottom: 24,
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.12s, box-shadow 0.12s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-2px, -2px)";
          e.currentTarget.style.boxShadow = `7px 7px 0 ${COLORS.ink}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0, 0)";
          e.currentTarget.style.boxShadow = `5px 5px 0 ${COLORS.ink}`;
        }}
      >
        <div className="halftone" style={{ position: "absolute", inset: 0, opacity: 0.1 }} />
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <div style={{
            width: 56,
            height: 56,
            background: COLORS.pop,
            border: `3px solid ${COLORS.ink}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            flexShrink: 0,
          }}>
            🗺
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="display-font" style={{
              fontSize: 22,
              color: COLORS.pop,
              textShadow: `2px 2px 0 ${COLORS.ink}`,
              lineHeight: 1,
              marginBottom: 4,
            }}>
              THE 90-DAY ROADMAP
            </div>
            <div style={{ fontSize: 13, opacity: 0.92 }}>
              Foundation → Conversion → Compounding. Open the interactive timeline →
            </div>
          </div>
        </div>
      </button>

      {/* Pipeline by Tier */}
      <Section title="PIPELINE BY TIER">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          <TierCard tier={1} count={tierCounts[1]} total={total} blurb="Priority — warm intro path or strategic fit" />
          <TierCard tier={2} count={tierCounts[2]} total={total} blurb="High-fit cold — strong alignment" />
          <TierCard tier={3} count={tierCounts[3]} total={total} blurb="Long-tail — bandwidth permitting" />
        </div>
      </Section>

      {/* Pipeline by Stage */}
      <Section title="PIPELINE BY STAGE">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {STAGES.map((s) => (
            <StagePill key={s} stage={s} count={stageCounts[s] || 0} />
          ))}
        </div>
      </Section>

      {/* Pipeline by sheet */}
      <Section title="JUMP TO A LIST">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          <JumpCard label="Organizations" count={data.organizations.length} subtitle="DV/SA orgs · schools · sponsors" color={COLORS.primary} onClick={() => setActiveTab("organizations")} />
          <JumpCard label="Colleges Pipeline" count={data.colleges.length} subtitle="HBCUs · Catholic · CCs" color={COLORS.pink} onClick={() => setActiveTab("colleges")} />
          <JumpCard label="Parent Media" count={data.parentMedia.length} subtitle="Podcasts · magazines · subs" color={COLORS.green} onClick={() => setActiveTab("parentMedia")} />
          <JumpCard label="Self-Care Media" count={data.selfCareMedia.length} subtitle="Wellness · mental health" color={COLORS.gold} onClick={() => setActiveTab("selfCareMedia")} />
          <JumpCard label="Gaps to Fill" count={data.gaps.length} subtitle="Foundations · sponsors · conferences" color={COLORS.blue} onClick={() => setActiveTab("gaps")} />
        </div>
      </Section>

      {/* Persistence note */}
      <div style={{
        marginTop: 24,
        padding: 14,
        background: COLORS.cream,
        border: `2px dashed ${COLORS.ink}`,
        borderRadius: 8,
        fontSize: 12,
        color: COLORS.ink,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        <span style={{ fontSize: 22 }}>💾</span>
        <div>
          <strong>Edits save automatically.</strong>{" "}
          {editsCount === 0 ? "No edits yet — start updating status, stage, or notes on any record." :
            `You have made ${editsCount} edit${editsCount === 1 ? "" : "s"} so far. Reload anytime; everything's stored locally.`}
        </div>
      </div>
    </div>
  );
}

function BigStat({ label, value, color, icon }) {
  return (
    <div className="comic-panel pop-in" style={{
      background: "white",
      padding: "18px 20px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: -8,
        right: -8,
        fontSize: 80,
        opacity: 0.13,
        fontFamily: "'Bowlby One', sans-serif",
        color,
        lineHeight: 1,
      }}>
        {icon}
      </div>
      <div className="blocky-font" style={{ fontSize: 11, color: COLORS.ink, opacity: 0.6, marginBottom: 4 }}>
        {label.toUpperCase()}
      </div>
      <div className="display-font" style={{
        fontSize: 48,
        color,
        lineHeight: 1,
        textShadow: `2px 2px 0 ${COLORS.ink}`,
      }}>
        {value}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 className="display-font" style={{
        fontSize: 22,
        marginBottom: 12,
        color: COLORS.ink,
        textShadow: `2px 2px 0 ${COLORS.pop}`,
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function TierCard({ tier, count, total, blurb }) {
  const t = TIER_BADGES[tier];
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="comic-panel comic-panel-hover" style={{
      background: t.bg,
      padding: 16,
      color: t.color,
    }}>
      <div className="display-font" style={{ fontSize: 24, marginBottom: 4, textShadow: tier === 2 ? "none" : `2px 2px 0 ${COLORS.ink}` }}>
        TIER {tier}
      </div>
      <div className="display-font" style={{ fontSize: 56, lineHeight: 1, textShadow: tier === 2 ? `2px 2px 0 ${COLORS.ink}` : `3px 3px 0 ${COLORS.ink}` }}>
        {count}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6, opacity: 0.85 }}>
        {pct}% of pipeline
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, marginTop: 8, lineHeight: 1.4 }}>
        {blurb}
      </div>
    </div>
  );
}

function StagePill({ stage, count }) {
  const color = STAGE_COLORS[stage] || COLORS.primary;
  return (
    <div style={{
      background: "white",
      border: `2.5px solid ${COLORS.ink}`,
      boxShadow: `3px 3px 0 ${COLORS.ink}`,
      padding: "8px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0,
    }}>
      <div style={{
        width: 12,
        height: 12,
        background: color,
        border: `2px solid ${COLORS.ink}`,
        borderRadius: 999,
      }} />
      <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.ink }}>{stage}</span>
      <span className="display-font" style={{
        fontSize: 18,
        color,
        textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
        marginLeft: 4,
      }}>
        {count}
      </span>
    </div>
  );
}

function JumpCard({ label, count, subtitle, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="comic-panel comic-panel-hover"
      style={{
        background: "white",
        padding: 18,
        textAlign: "left",
        cursor: "pointer",
        border: `3px solid ${COLORS.ink}`,
        font: "inherit",
      }}
    >
      <div style={{
        width: 36,
        height: 36,
        background: color,
        border: `2.5px solid ${COLORS.ink}`,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Bowlby One', sans-serif",
        color: "white",
        fontSize: 18,
        textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
      }}>
        {label[0]}
      </div>
      <div className="display-font" style={{ fontSize: 18, color: COLORS.ink }}>
        {label.toUpperCase()}
      </div>
      <div style={{ fontSize: 11, color: COLORS.ink, opacity: 0.65, marginTop: 2, fontWeight: 500 }}>
        {subtitle}
      </div>
      <div className="display-font" style={{
        fontSize: 36,
        color,
        textShadow: `2px 2px 0 ${COLORS.ink}`,
        marginTop: 6,
        lineHeight: 1,
      }}>
        {count}
      </div>
    </button>
  );
}


// ==========================================================
// RECORD TABLE — main editable list view
// ==========================================================
function RecordTable({ records, sheet, sheetKey, applyPatch, resetRecord, patches, columns, extraFilters, addContact, deleteAddedContact, addFormFields }) {
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("all");
  const [catFilter, setCatFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortKey, setSortKey] = useState("t");
  const [sortDir, setSortDir] = useState("asc");
  const [expandedId, setExpandedId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showOnlyAdded, setShowOnlyAdded] = useState(false);

  const categories = useMemo(() => {
    const set = new Set(records.map((r) => r.cat).filter(Boolean));
    return Array.from(set).sort();
  }, [records]);

  const userAddedCount = records.filter((r) => r.isUserAdded).length;

  const filtered = useMemo(() => {
    let result = records.filter((r) => {
      if (showOnlyAdded && !r.isUserAdded) return false;
      if (tierFilter !== "all" && String(r.t) !== tierFilter) return false;
      if (catFilter !== "all" && r.cat !== catFilter) return false;
      if (stageFilter !== "all" && (r.stage || "Cold") !== stageFilter) return false;
      if (statusFilter !== "all" && (r.status || "Not yet contacted") !== statusFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const fields = [r.org, r.name, r.email, r.cat, r.sub, r.notes, r.title, r.nextAction];
        if (!fields.some((f) => f && String(f).toLowerCase().includes(q))) return false;
      }
      return true;
    });

    result = [...result].sort((a, b) => {
      // User-added always comes first within a sort group? No — let user toggle sort normally.
      let av = a[sortKey] || "";
      let bv = b[sortKey] || "";
      if (sortKey === "t") {
        av = a.t || 9;
        bv = b.t || 9;
      }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return result;
  }, [records, search, tierFilter, catFilter, stageFilter, statusFilter, sortKey, sortDir, showOnlyAdded]);

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const editedCount = records.filter((r) => patches[r.id]).length;

  return (
    <div>
      {/* Action bar with Add Contact button */}
      <div style={{
        display: "flex",
        gap: 10,
        marginBottom: 12,
        flexWrap: "wrap",
        alignItems: "center",
      }}>
        <button
          onClick={() => setShowAddModal(true)}
          className="comic-button"
          style={{
            background: COLORS.green,
            color: "white",
            padding: "10px 18px",
            fontSize: 13,
            textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
          }}
        >
          ✚ Add New Contact
        </button>
        {userAddedCount > 0 && (
          <button
            onClick={() => setShowOnlyAdded((v) => !v)}
            className="comic-button"
            style={{
              background: showOnlyAdded ? COLORS.pink : "white",
              color: showOnlyAdded ? "white" : COLORS.ink,
              padding: "10px 14px",
              fontSize: 12,
              textShadow: showOnlyAdded ? `1.5px 1.5px 0 ${COLORS.ink}` : "none",
            }}
          >
            {showOnlyAdded ? "✓ " : ""}Show only my additions ({userAddedCount})
          </button>
        )}
        <div style={{
          marginLeft: "auto",
          fontSize: 11,
          color: COLORS.ink,
          opacity: 0.7,
        }}>
          Tip: click any cell to edit. Click <strong>+</strong> to expand a row.
        </div>
      </div>

      {/* Filter bar */}
      <div className="comic-panel-thin" style={{
        background: "white",
        padding: 12,
        marginBottom: 14,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
      }}>
        <input
          type="text"
          placeholder="🔍 Search org, contact, email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "1 1 220px",
            border: `2px solid ${COLORS.ink}`,
            padding: "8px 12px",
            fontSize: 13,
            fontFamily: "'Inter', system-ui",
            background: COLORS.cream,
            outline: "none",
          }}
        />
        {extraFilters.includes("t") && (
          <FilterSelect label="Tier" value={tierFilter} onChange={setTierFilter} options={[
            { value: "all", label: "All Tiers" },
            { value: "1", label: "Tier 1" },
            { value: "2", label: "Tier 2" },
            { value: "3", label: "Tier 3" },
          ]} />
        )}
        {extraFilters.includes("cat") && categories.length > 1 && (
          <FilterSelect
            label="Category"
            value={catFilter}
            onChange={setCatFilter}
            options={[
              { value: "all", label: "All Categories" },
              ...categories.map((c) => ({ value: c, label: c })),
            ]}
          />
        )}
        {extraFilters.includes("stage") && (
          <FilterSelect
            label="Stage"
            value={stageFilter}
            onChange={setStageFilter}
            options={[
              { value: "all", label: "All Stages" },
              ...STAGES.map((s) => ({ value: s, label: s })),
            ]}
          />
        )}
        <FilterSelect
          label="Status"
          value={statusFilter}
          onChange={setStatusFilter}
          options={[
            { value: "all", label: "All Statuses" },
            ...STATUSES.map((s) => ({ value: s, label: s })),
          ]}
        />
        <div style={{
          marginLeft: "auto",
          fontSize: 11,
          fontWeight: 700,
          color: COLORS.ink,
          background: COLORS.pop,
          border: `2px solid ${COLORS.ink}`,
          padding: "4px 10px",
        }}>
          {filtered.length} / {records.length} {editedCount > 0 ? ` · ${editedCount} edited` : ""}
        </div>
      </div>

      {/* Table — using divs for control */}
      <div style={{
        background: "white",
        border: `3px solid ${COLORS.ink}`,
        boxShadow: `5px 5px 0 ${COLORS.ink}`,
        overflow: "hidden",
      }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 1100 }}>
            <thead>
              <tr style={{ background: COLORS.bgDark, color: "white" }}>
                <th style={thStyle}></th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    onClick={() => toggleSort(col.key)}
                    style={{
                      ...thStyle,
                      minWidth: col.width,
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span>{col.label}</span>
                      {sortKey === col.key && <span style={{ fontSize: 10 }}>{sortDir === "asc" ? "▲" : "▼"}</span>}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={columns.length + 1} style={{ padding: 30, textAlign: "center", color: COLORS.ink, opacity: 0.6 }}>
                    <div className="display-font" style={{ fontSize: 18 }}>NOTHING MATCHES YOUR FILTERS</div>
                    <div style={{ fontSize: 12, marginTop: 6 }}>Try clearing filters or search</div>
                  </td>
                </tr>
              )}
              {filtered.map((r) => (
                <Row
                  key={r.id}
                  record={r}
                  columns={columns}
                  applyPatch={applyPatch}
                  resetRecord={resetRecord}
                  isExpanded={expandedId === r.id}
                  onToggleExpand={() => setExpandedId(expandedId === r.id ? null : r.id)}
                  isEdited={!!patches[r.id]}
                  sheetKey={sheetKey}
                  deleteAddedContact={deleteAddedContact}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddModal && (
        <AddContactModal
          fields={addFormFields}
          sheetCode={sheet}
          sheetKey={sheetKey}
          onSave={(record) => {
            addContact(sheetKey, record);
            setShowAddModal(false);
          }}
          onCancel={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}

const thStyle = {
  padding: "10px 8px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  borderBottom: `3px solid ${COLORS.ink}`,
  borderRight: `1px solid rgba(255,255,255,0.15)`,
  whiteSpace: "nowrap",
};

const tdStyle = {
  padding: "8px",
  fontSize: 12,
  color: COLORS.ink,
  borderBottom: `1px solid #E5E7EB`,
  verticalAlign: "top",
  lineHeight: 1.4,
};

function FilterSelect({ label, value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        border: `2px solid ${COLORS.ink}`,
        padding: "7px 10px",
        fontSize: 12,
        fontFamily: "'Inter', system-ui",
        fontWeight: 600,
        background: "white",
        outline: "none",
        cursor: "pointer",
      }}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {label}: {opt.label}
        </option>
      ))}
    </select>
  );
}


// ==========================================================
// ROW component — renders a record + an expandable detail panel
// ==========================================================
function Row({ record, columns, applyPatch, resetRecord, isExpanded, onToggleExpand, isEdited, sheetKey, deleteAddedContact }) {
  const r = record;
  // user-added rows get a special background tint to stand out
  const tierBg = r.isUserAdded
    ? "#FCE7F3"  // soft pink for user-added
    : r.t === 1 ? "#D4EDDA" : r.t === 2 ? "#FFF3CD" : r.t === 3 ? "#F8D7DA" : "white";

  return (
    <>
      <tr style={{
        background: tierBg,
        borderBottom: `1px solid #D1D5DB`,
        borderLeft: r.isUserAdded ? `4px solid ${COLORS.pink}` : "none",
      }}>
        <td style={{ ...tdStyle, paddingLeft: 6, paddingRight: 4 }}>
          <button
            onClick={onToggleExpand}
            title="Expand row"
            style={{
              background: isExpanded ? COLORS.primary : "white",
              color: isExpanded ? "white" : COLORS.ink,
              border: `2px solid ${COLORS.ink}`,
              width: 22,
              height: 22,
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 800,
              padding: 0,
              fontFamily: "'Inter', system-ui",
            }}
          >
            {isExpanded ? "−" : "+"}
          </button>
          {isEdited && !r.isUserAdded && (
            <div title="Edited" style={{
              width: 6,
              height: 6,
              background: COLORS.pink,
              borderRadius: 999,
              marginTop: 4,
              marginLeft: 8,
            }} />
          )}
          {r.isUserAdded && (
            <div title="Added by you" style={{
              fontSize: 9,
              fontWeight: 800,
              color: COLORS.pink,
              marginTop: 4,
              letterSpacing: "0.05em",
            }}>
              ✚NEW
            </div>
          )}
        </td>
        {columns.map((col) => (
          <td key={col.key} style={tdStyle}>
            <CellRenderer
              record={r}
              col={col}
              applyPatch={applyPatch}
            />
          </td>
        ))}
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan={columns.length + 1} style={{
            background: "#FFF8E7",
            padding: 0,
            borderBottom: `2px solid ${COLORS.ink}`,
          }}>
            <DetailPanel
              record={r}
              applyPatch={applyPatch}
              resetRecord={resetRecord}
              isEdited={isEdited}
              sheetKey={sheetKey}
              deleteAddedContact={deleteAddedContact}
            />
          </td>
        </tr>
      )}
    </>
  );
}

function CellRenderer({ record, col, applyPatch }) {
  const r = record;
  const v = r[col.key];

  if (col.type === "tier") {
    if (!r.t) return <span style={{ color: "#9CA3AF", fontSize: 11 }}>—</span>;
    const t = TIER_BADGES[r.t];
    return (
      <span style={{
        background: t.bg,
        color: t.color,
        fontFamily: "'Bowlby One', sans-serif",
        fontSize: 10,
        padding: "3px 8px",
        border: `2px solid ${COLORS.ink}`,
        textShadow: r.t === 2 ? "none" : `1px 1px 0 ${COLORS.ink}`,
        letterSpacing: "0.05em",
        whiteSpace: "nowrap",
      }}>
        T{r.t}
      </span>
    );
  }

  if (col.type === "stage") {
    const stage = v || "Cold";
    return (
      <select
        value={stage}
        onChange={(e) => applyPatch(r.id, "stage", e.target.value)}
        style={{
          border: `2px solid ${COLORS.ink}`,
          padding: "4px 6px",
          fontSize: 11,
          fontWeight: 600,
          background: STAGE_COLORS[stage] || COLORS.primary,
          color: stage === "Cold" ? COLORS.ink : "white",
          fontFamily: "'Inter', system-ui",
          width: "100%",
          outline: "none",
          cursor: "pointer",
        }}
      >
        {STAGES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    );
  }

  if (col.type === "status") {
    const status = v || "Not yet contacted";
    return (
      <select
        value={status}
        onChange={(e) => applyPatch(r.id, "status", e.target.value)}
        style={{
          border: `2px solid ${COLORS.ink}`,
          padding: "4px 6px",
          fontSize: 11,
          fontWeight: 600,
          background: "white",
          color: COLORS.ink,
          fontFamily: "'Inter', system-ui",
          width: "100%",
          outline: "none",
          cursor: "pointer",
        }}
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    );
  }

  if (col.type === "email") {
    if (!v) return <EditInline value={v} onSave={(val) => applyPatch(r.id, col.key, val)} placeholder="add email…" />;
    return (
      <a href={`mailto:${v}`} style={{
        color: COLORS.primary,
        textDecoration: "underline",
        fontSize: 11,
        wordBreak: "break-all",
      }}>
        {v}
      </a>
    );
  }

  if (col.type === "longtext") {
    return <EditInline value={v} onSave={(val) => applyPatch(r.id, col.key, val)} placeholder="…" multiline />;
  }

  // text default
  return <EditInline value={v} onSave={(val) => applyPatch(r.id, col.key, val)} placeholder="—" />;
}

function EditInline({ value, onSave, placeholder, multiline }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || "");

  useEffect(() => setDraft(value || ""), [value]);

  if (!editing) {
    return (
      <div
        onClick={() => setEditing(true)}
        title="Click to edit"
        style={{
          cursor: "text",
          minHeight: 18,
          padding: "2px 4px",
          color: value ? COLORS.ink : "#9CA3AF",
          fontSize: 12,
          fontStyle: value ? "normal" : "italic",
          whiteSpace: multiline ? "pre-wrap" : "nowrap",
          overflow: multiline ? "visible" : "hidden",
          textOverflow: multiline ? "clip" : "ellipsis",
          maxWidth: "100%",
          borderRadius: 4,
          transition: "background 0.12s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(124,58,237,0.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {value || placeholder}
      </div>
    );
  }

  const commit = () => {
    setEditing(false);
    if (draft !== (value || "")) onSave(draft);
  };

  if (multiline) {
    return (
      <textarea
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setDraft(value || "");
            setEditing(false);
          }
          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) commit();
        }}
        className="ce-input"
        style={{ minHeight: 60, resize: "vertical" }}
      />
    );
  }
  return (
    <input
      autoFocus
      type="text"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={(e) => {
        if (e.key === "Enter") commit();
        if (e.key === "Escape") {
          setDraft(value || "");
          setEditing(false);
        }
      }}
      className="ce-input"
    />
  );
}

function DetailPanel({ record, applyPatch, resetRecord, isEdited, sheetKey, deleteAddedContact }) {
  const r = record;
  return (
    <div style={{
      padding: "16px 20px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      borderTop: `2px dashed ${COLORS.ink}`,
    }}>
      <div>
        <FieldLabel>Organization</FieldLabel>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{r.org}</div>

        <FieldLabel>Sub-Category</FieldLabel>
        <div style={{ fontSize: 12, marginBottom: 10 }}>{r.sub || "—"}</div>

        <FieldLabel>Contact</FieldLabel>
        <div style={{ fontSize: 12, marginBottom: 4 }}>{r.name || <em style={{ color: "#9CA3AF" }}>No named contact yet — research needed</em>}</div>
        <div style={{ fontSize: 12, marginBottom: 10, color: COLORS.ink, opacity: 0.7 }}>{r.title || ""}</div>

        <FieldLabel>Email</FieldLabel>
        <div style={{ fontSize: 12, marginBottom: 10 }}>
          {r.email ? <a href={`mailto:${r.email}`} style={{ color: COLORS.primary }}>{r.email}</a> : <em style={{ color: "#9CA3AF" }}>none</em>}
        </div>
      </div>

      <div>
        <FieldLabel>Date First Contacted</FieldLabel>
        <input
          type="date"
          value={r.dateContact || ""}
          onChange={(e) => applyPatch(r.id, "dateContact", e.target.value)}
          className="ce-input"
          style={{ marginBottom: 10 }}
        />

        <FieldLabel>Last Touch Date</FieldLabel>
        <input
          type="date"
          value={r.dateLast || ""}
          onChange={(e) => applyPatch(r.id, "dateLast", e.target.value)}
          className="ce-input"
          style={{ marginBottom: 10 }}
        />

        <FieldLabel>Next Action Due</FieldLabel>
        <input
          type="date"
          value={r.nextDue || ""}
          onChange={(e) => applyPatch(r.id, "nextDue", e.target.value)}
          className="ce-input"
          style={{ marginBottom: 10 }}
        />

        <FieldLabel>Source / How Found</FieldLabel>
        <div style={{ fontSize: 11, color: COLORS.ink, opacity: 0.7 }}>{r.src || "—"}</div>
      </div>

      <div style={{ gridColumn: "1 / -1" }}>
        <FieldLabel>Notes</FieldLabel>
        <textarea
          value={r.notes || ""}
          onChange={(e) => applyPatch(r.id, "notes", e.target.value)}
          placeholder="Conversation history, intel, follow-up reminders…"
          className="ce-input"
          style={{ minHeight: 80, resize: "vertical" }}
        />
      </div>

      <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, flexWrap: "wrap" }}>
        {isEdited && !r.isUserAdded && (
          <button
            onClick={() => {
              if (confirm("Reset this record to its original values? Your edits will be lost.")) {
                resetRecord(r.id);
              }
            }}
            className="comic-button"
            style={{
              background: "white",
              padding: "5px 10px",
              fontSize: 11,
            }}
          >
            ⟲ Reset this record
          </button>
        )}
        {r.isUserAdded && deleteAddedContact && sheetKey && (
          <button
            onClick={() => {
              if (confirm(`Delete "${r.org}" permanently? This cannot be undone.`)) {
                deleteAddedContact(sheetKey, r.id);
              }
            }}
            className="comic-button"
            style={{
              background: COLORS.red,
              color: "white",
              padding: "5px 12px",
              fontSize: 11,
              textShadow: `1px 1px 0 ${COLORS.ink}`,
            }}
          >
            ✕ Delete this contact
          </button>
        )}
      </div>
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <div className="blocky-font" style={{
      fontSize: 10,
      color: COLORS.ink,
      opacity: 0.5,
      marginBottom: 4,
      letterSpacing: "0.08em",
    }}>
      {String(children).toUpperCase()}
    </div>
  );
}


// ==========================================================
// ADD CONTACT MODAL
// ==========================================================
function AddContactModal({ fields, sheetCode, sheetKey, onSave, onCancel }) {
  // Initialize draft with field defaults
  const [draft, setDraft] = useState(() => {
    const init = { sheet: sheetCode };
    fields.forEach((f) => {
      if (f.default !== undefined) init[f.key] = f.default;
    });
    return init;
  });
  const [error, setError] = useState("");

  const update = (key, value) => {
    setDraft((d) => ({ ...d, [key]: value }));
    if (error) setError("");
  };

  const handleSave = () => {
    // Check required fields
    const missing = fields.filter((f) => f.required && !draft[f.key]?.toString().trim());
    if (missing.length > 0) {
      setError(`Required: ${missing.map((m) => m.label).join(", ")}`);
      return;
    }
    // Coerce tier to number if present
    const out = { ...draft };
    if (out.t !== undefined && out.t !== "") {
      out.t = parseInt(out.t, 10);
    }
    onSave(out);
  };

  // Close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(13, 13, 13, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: 20,
      overflow: "auto",
    }}
    onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div className="comic-panel" style={{
        background: COLORS.bg,
        maxWidth: 720,
        width: "100%",
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{
          background: COLORS.primary,
          color: "white",
          padding: "16px 20px",
          borderBottom: `3px solid ${COLORS.ink}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>
          <div>
            <div className="display-font" style={{ fontSize: 22, textShadow: `2px 2px 0 ${COLORS.ink}`, lineHeight: 1 }}>
              ✚ ADD A NEW CONTACT
            </div>
            <div style={{ fontSize: 11, opacity: 0.9, marginTop: 4, fontWeight: 500 }}>
              Saves automatically when you click Save
            </div>
          </div>
          <button
            onClick={onCancel}
            style={{
              background: "white",
              color: COLORS.ink,
              border: `2.5px solid ${COLORS.ink}`,
              boxShadow: `2px 2px 0 ${COLORS.ink}`,
              width: 30,
              height: 30,
              fontSize: 16,
              fontFamily: "'Bowlby One', sans-serif",
              cursor: "pointer",
              flexShrink: 0,
            }}
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Body — scrollable form */}
        <div style={{
          padding: "18px 22px",
          overflowY: "auto",
          flex: 1,
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
          }}>
            {fields.map((f) => (
              <div key={f.key} style={{ gridColumn: f.type === "textarea" ? "1 / -1" : "auto" }}>
                <FieldLabel>
                  {f.label}{f.required ? " *" : ""}
                </FieldLabel>
                {f.type === "select" ? (
                  <select
                    value={draft[f.key] || ""}
                    onChange={(e) => update(f.key, e.target.value)}
                    className="ce-input"
                    style={{
                      cursor: "pointer",
                      fontSize: 13,
                      padding: "8px 10px",
                      background: "white",
                      border: `2px solid ${COLORS.ink}`,
                    }}
                  >
                    <option value="">— Select —</option>
                    {f.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea
                    value={draft[f.key] || ""}
                    onChange={(e) => update(f.key, e.target.value)}
                    placeholder={f.placeholder || ""}
                    className="ce-input"
                    style={{
                      minHeight: 60,
                      resize: "vertical",
                      fontSize: 13,
                      padding: "8px 10px",
                      background: "white",
                      border: `2px solid ${COLORS.ink}`,
                    }}
                  />
                ) : (
                  <input
                    type={f.type === "email" ? "email" : "text"}
                    value={draft[f.key] || ""}
                    onChange={(e) => update(f.key, e.target.value)}
                    placeholder={f.placeholder || ""}
                    className="ce-input"
                    style={{
                      fontSize: 13,
                      padding: "8px 10px",
                      background: "white",
                      border: `2px solid ${COLORS.ink}`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {error && (
            <div style={{
              marginTop: 14,
              padding: "10px 14px",
              background: COLORS.red,
              color: "white",
              border: `2.5px solid ${COLORS.ink}`,
              fontSize: 12,
              fontWeight: 700,
            }}>
              ⚠ {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: "14px 22px",
          borderTop: `3px solid ${COLORS.ink}`,
          background: "white",
          display: "flex",
          gap: 10,
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}>
          <button
            onClick={onCancel}
            className="comic-button"
            style={{
              background: "white",
              color: COLORS.ink,
              padding: "10px 18px",
              fontSize: 12,
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="comic-button"
            style={{
              background: COLORS.green,
              color: "white",
              padding: "10px 24px",
              fontSize: 13,
              textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
            }}
          >
            ✓ Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}


// ==========================================================
// GAPS VIEW — different layout for the strategic gaps tab
// ==========================================================
function GapsView({ records, applyPatch, addContact, deleteAddedContact }) {
  const [filter, setFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const pillars = useMemo(() => {
    const set = new Set(records.map((r) => r.cat));
    return Array.from(set);
  }, [records]);

  const filtered = filter === "all" ? records : records.filter((r) => r.cat === filter);
  const groupedByPillar = useMemo(() => {
    const grouped = {};
    filtered.forEach((r) => {
      const k = r.cat || "Other";
      if (!grouped[k]) grouped[k] = [];
      grouped[k].push(r);
    });
    return grouped;
  }, [filtered]);

  const PILLAR_COLORS = {
    "Foundations & Funders": COLORS.blue,
    "Corporate Sponsors": COLORS.gold,
    "Warm-Intro Nodes (from book credits)": COLORS.green,
    "Conferences & Speaking": COLORS.primary,
    "Faith-Aligned Partners": COLORS.red,
    "Additional Strategic Gaps": "#6B7280",
  };

  return (
    <div>
      <div style={{
        background: COLORS.bgDark,
        color: "white",
        padding: 18,
        marginBottom: 18,
        border: `3px solid ${COLORS.ink}`,
        boxShadow: `5px 5px 0 ${COLORS.ink}`,
      }}>
        <div className="display-font" style={{ fontSize: 22, marginBottom: 6, color: COLORS.pop, textShadow: `2px 2px 0 ${COLORS.ink}` }}>
          THE PILLARS YOUR LIST DOESN'T COVER YET
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.5, maxWidth: 800 }}>
          The existing outreach list is strong on direct mission allies (DV/SA orgs, schools, women's centers), but missing key pillars the JD explicitly calls out: <strong>foundations, corporate sponsors, conferences,</strong> and <strong>warm-intro nodes from the book itself</strong>. Each of these unlocks scale that one-by-one outreach can't.
        </div>
      </div>

      {addContact && (
        <div style={{ marginBottom: 14 }}>
          <button
            onClick={() => setShowAddModal(true)}
            className="comic-button"
            style={{
              background: COLORS.green,
              color: "white",
              padding: "10px 18px",
              fontSize: 13,
              textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
            }}
          >
            ✚ Add a Gap Target
          </button>
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
        <button
          onClick={() => setFilter("all")}
          className="comic-button"
          style={{
            background: filter === "all" ? COLORS.pop : "white",
            color: COLORS.ink,
            padding: "7px 12px",
            fontSize: 11,
          }}
        >
          All ({records.length})
        </button>
        {pillars.map((p) => (
          <button
            key={p}
            onClick={() => setFilter(p)}
            className="comic-button"
            style={{
              background: filter === p ? PILLAR_COLORS[p] || COLORS.primary : "white",
              color: filter === p ? "white" : COLORS.ink,
              padding: "7px 12px",
              fontSize: 11,
            }}
          >
            {p} ({records.filter((r) => r.cat === p).length})
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gap: 18 }}>
        {Object.entries(groupedByPillar).map(([pillar, items]) => (
          <div key={pillar} className="comic-panel" style={{ background: "white", padding: 0, overflow: "hidden" }}>
            <div style={{
              background: PILLAR_COLORS[pillar] || COLORS.primary,
              color: "white",
              padding: "10px 16px",
              borderBottom: `3px solid ${COLORS.ink}`,
            }}>
              <div className="display-font" style={{ fontSize: 18, textShadow: `2px 2px 0 ${COLORS.ink}` }}>
                {pillar.toUpperCase()}
              </div>
              <div style={{ fontSize: 11, opacity: 0.9, marginTop: 2 }}>
                {items.length} target{items.length === 1 ? "" : "s"}
              </div>
            </div>
            <div style={{ padding: 12 }}>
              {items.map((it) => (
                <div key={it.id} style={{
                  padding: 10,
                  borderBottom: `1px dashed #D1D5DB`,
                  borderLeft: it.isUserAdded ? `4px solid ${COLORS.pink}` : "none",
                  background: it.isUserAdded ? "#FCE7F3" : "transparent",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: COLORS.ink, marginBottom: 2, display: "flex", alignItems: "center", gap: 6 }}>
                        {it.org}
                        {it.isUserAdded && (
                          <span style={{
                            fontSize: 9,
                            fontWeight: 800,
                            color: "white",
                            background: COLORS.pink,
                            padding: "2px 6px",
                            border: `1.5px solid ${COLORS.ink}`,
                            letterSpacing: "0.05em",
                          }}>
                            ✚NEW
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 11.5, color: COLORS.ink, opacity: 0.75, lineHeight: 1.45 }}>
                        {it.why}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                      <span className="pill" style={{
                        background: it.priority === "High" ? COLORS.green : it.priority === "Medium" ? COLORS.gold : "#E5E7EB",
                        color: it.priority === "High" ? "white" : COLORS.ink,
                      }}>
                        {it.priority}
                      </span>
                      <select
                        value={it.status || "Research needed"}
                        onChange={(e) => applyPatch(it.id, "status", e.target.value)}
                        style={{
                          border: `2px solid ${COLORS.ink}`,
                          padding: "3px 6px",
                          fontSize: 10,
                          fontWeight: 600,
                          background: "white",
                          fontFamily: "'Inter', system-ui",
                          cursor: "pointer",
                        }}
                      >
                        <option>Research needed</option>
                        <option>Researching</option>
                        <option>Lead identified</option>
                        <option>Pitched</option>
                        <option>In conversation</option>
                        <option>Won</option>
                        <option>Closed lost</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginTop: 6, display: "flex", gap: 6, alignItems: "center" }}>
                    <input
                      type="text"
                      value={it.name || ""}
                      onChange={(e) => applyPatch(it.id, "name", e.target.value)}
                      placeholder="Add lead contact name…"
                      className="ce-input"
                      style={{ fontSize: 11, padding: "4px 8px", flex: 1 }}
                    />
                    {it.isUserAdded && deleteAddedContact && (
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${it.org}"?`)) {
                            deleteAddedContact("gaps", it.id);
                          }
                        }}
                        style={{
                          background: COLORS.red,
                          color: "white",
                          border: `2px solid ${COLORS.ink}`,
                          padding: "4px 8px",
                          fontSize: 10,
                          fontWeight: 700,
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                        title="Delete this gap"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && addContact && (
        <AddContactModal
          fields={GAP_FORM_FIELDS}
          sheetCode="gap"
          sheetKey="gaps"
          onSave={(record) => {
            addContact("gaps", record);
            setShowAddModal(false);
          }}
          onCancel={() => setShowAddModal(false)}
        />
      )}
    </div>
  );
}


// ==========================================================
// ROADMAP DATA
// The 30/60/90 strategy roadmap, mirroring the strategy doc
// ==========================================================
const ROADMAP_DATA = [
  {
    id: "p1",
    label: "Days 1–30",
    title: "FOUNDATION",
    theme: "Get the table set",
    color: "#7C3AED",
    accent: "#A78BFA",
    intro: "The first 30 days build the system, set up the pipeline, and put the first warm-intro asks in motion. We're not chasing volume yet. We're getting our voice right, our materials sharp, and our first warm doors open.",
    milestone: "By Day 30: speaker one-pager + case-for-support live, OC schools contacted, 5 inner-circle podcasts pitched, 3 priority foundations researched, warm-intro requests sent.",
    tasks: [
      { id: "p1-01", task: "Finalize and send the speaker one-pager (Tiffany bio, talk titles, testimonials, photo, contact)", owner: "Together", when: "Week 1" },
      { id: "p1-02", task: "Build the case-for-support one-pager (mission, three products, theory of change, ask)", owner: "You", when: "Week 1" },
      { id: "p1-03", task: "Write 4 outreach email templates (school, college, podcast, funder) — voice-matched, personalization-ready", owner: "You", when: "Week 1" },
      { id: "p1-04", task: "Tiffany approves all templates and one-pagers", owner: "Tiffany", when: "Week 1" },
      { id: "p1-05", task: "Email Dr. Brendan Kwiatkowski-Hartman with specific intro asks (male-education podcasts, athletic depts)", owner: "Tiffany", when: "Week 1" },
      { id: "p1-06", task: "Email Rita Smith with specific intro asks (DV national network, speaking circuits)", owner: "Tiffany", when: "Week 1" },
      { id: "p1-07", task: "Email Dr. Judie Lomax with specific intro asks (Gallaudet, Deaf community partnerships)", owner: "Tiffany", when: "Week 1" },
      { id: "p1-08", task: "Submit Common Sense Media review request", owner: "You", when: "Week 1" },
      { id: "p1-09", task: "Send personalized first-touch to all 10 IUSD/Greenfield contacts", owner: "You", when: "Week 2" },
      { id: "p1-10", task: "Pitch 5 inner-circle podcasts (Therapy for Black Girls, Mel Robbins, Will to Change, A Really Good Cry, Mentally Stronger)", owner: "You", when: "Week 2" },
      { id: "p1-11", task: "Document CASEL framework alignment for the curriculum", owner: "Tiffany", when: "Week 2" },
      { id: "p1-12", task: "Identify Allstate Purple Purse, CA Wellness Foundation, Bumble Foundation program officers by name", owner: "You", when: "Week 2" },
      { id: "p1-13", task: "Send 3 priority foundation first-touch emails", owner: "You", when: "Week 3" },
      { id: "p1-14", task: "Pitch 5 middle-circle podcasts (Dr. Becky, Raising Good Humans, Ask Lisa, NPR Life Kit, Armchair Expert)", owner: "You", when: "Week 3" },
      { id: "p1-15", task: "Send NSAC, NASPA, ATIXA conference speaker proposals", owner: "You", when: "Week 3" },
      { id: "p1-16", task: "First-touch HBCU shortlist: Spelman, Howard, Morehouse, FAMU, Xavier (FYE / Health Ed offices)", owner: "You", when: "Week 4" },
      { id: "p1-17", task: "First-touch CA community colleges: SMC, Pasadena, Long Beach, Fullerton, Irvine Valley", owner: "You", when: "Week 4" },
      { id: "p1-18", task: "Day-30 review: what worked, what didn't, recalibrate", owner: "Together", when: "End of month" },
    ],
  },
  {
    id: "p2",
    label: "Days 31–60",
    title: "CONVERSION",
    theme: "Turn conversations into commitments",
    color: "#EC4899",
    accent: "#F472B6",
    intro: "Month two is when the first replies turn into conversations. The work shifts from outreach to follow-through — booking calls, having them, sending tailored materials, advancing pipeline. Outreach continues but at lower volume; closing what's started is the priority.",
    milestone: "By Day 60: first podcasts recorded, first OC pilot session run, foundation discovery calls completed, second wave of HBCUs and Divine 9 nationals contacted.",
    tasks: [
      { id: "p2-01", task: "Run discovery calls with every podcast that responded — convert to confirmed bookings", owner: "Tiffany", when: "Week 5" },
      { id: "p2-02", task: "Confirm 1–2 OC school pilots — set start dates, deliver materials", owner: "Together", when: "Week 5" },
      { id: "p2-03", task: "Send second-touch to non-responders from week 1–4 (genuinely useful follow-up, not nag)", owner: "You", when: "Week 5" },
      { id: "p2-04", task: "Foundation discovery calls — Tiffany takes the call, you prep her", owner: "Tiffany", when: "Week 5–6" },
      { id: "p2-05", task: "Send tailored follow-up materials to any foundation that took a call", owner: "You", when: "Week 6" },
      { id: "p2-06", task: "First HBCU follow-ups — call FYE / Health Ed contacts who haven't replied", owner: "You", when: "Week 6" },
      { id: "p2-07", task: "Pitch outer-circle podcasts (faith-aligned: Focus on the Family; mainstream: Today, HuffPost)", owner: "You", when: "Week 6" },
      { id: "p2-08", task: "Run first OC school pilot session — Tiffany attends or supports remotely", owner: "Tiffany", when: "Week 7" },
      { id: "p2-09", task: "Capture first pilot testimonial / quote for use in future outreach", owner: "You", when: "Week 7" },
      { id: "p2-10", task: "First-touch second wave: HBCUs not yet contacted (Tuskegee, Bowie State, Delaware State, NC A&T, Albany State, Fayetteville, Clark Atlanta)", owner: "You", when: "Week 7" },
      { id: "p2-11", task: "First-touch Divine 9 nationals (AKA, Zeta Phi Beta, Alpha Phi Alpha, Sigma Gamma Rho)", owner: "You", when: "Week 7" },
      { id: "p2-12", task: "First-touch state DV/SA coalitions (10 already on existing list)", owner: "You", when: "Week 8" },
      { id: "p2-13", task: "Confirm anchor speaking engagement — pitch DV state coalition annual meetings, regional Title IX gatherings", owner: "Tiffany", when: "Week 8" },
      { id: "p2-14", task: "Submit a piece to Edutopia / school counselor publications using OC pilot insights", owner: "You", when: "Week 8" },
      { id: "p2-15", task: "Day-60 review: pipeline metrics, what's working, kill what isn't", owner: "Together", when: "End of month" },
    ],
  },
  {
    id: "p3",
    label: "Days 61–90",
    title: "COMPOUNDING",
    theme: "Turn first wins into next wins",
    color: "#10B981",
    accent: "#34D399",
    intro: "By month three, early wins exist and become the proof for the next layer of pitches. We use the first podcast, the first pilot, the first foundation conversation as credentials in everything that follows. We also start designing the systems that make month 4 onward scalable.",
    milestone: "By Day 90: 2–3 podcasts live, IUSD district conversation started, foundation #1 in active diligence, fall RA training pilot in motion, playbook codified for repeatability.",
    tasks: [
      { id: "p3-01", task: "Recorded podcasts go live — promote across Tiffany's channels and use in next outreach", owner: "Together", when: "Week 9" },
      { id: "p3-02", task: "Use first pilot testimonial in IUSD district-level outreach", owner: "You", when: "Week 9" },
      { id: "p3-03", task: "Send IUSD curriculum / SEL coordinator the case study + ask for a 30-min meeting", owner: "You", when: "Week 9" },
      { id: "p3-04", task: "Refresh underperforming outreach templates based on 60 days of reply-rate data", owner: "You", when: "Week 9" },
      { id: "p3-05", task: "Pitch second wave of speaking — community college FYE conferences, ASCA, NCAA convention prep", owner: "You", when: "Week 10" },
      { id: "p3-06", task: "Run second OC school pilot — capture testimonial #2", owner: "Tiffany", when: "Week 10" },
      { id: "p3-07", task: "Foundation #1: progress from discovery call to formal proposal request", owner: "Together", when: "Week 10" },
      { id: "p3-08", task: "First-touch Catholic-aligned colleges (LMU, USD, Santa Clara, Pepperdine) — Tiffany has 5 Catholic theologian contacts to leverage", owner: "You", when: "Week 10" },
      { id: "p3-09", task: "Submit speaker proposal to NCAA Convention Health & Safety track (next-cycle deadline)", owner: "You", when: "Week 11" },
      { id: "p3-10", task: "Confirm fall RA training pilot at 1 HBCU or 1 CA CC — paperwork in motion", owner: "Together", when: "Week 11" },
      { id: "p3-11", task: "Build the \"Year 1 results\" snapshot — 3–5 metrics worth tracking, baseline established", owner: "You", when: "Week 12" },
      { id: "p3-12", task: "Send case-for-support v2 to second-tier foundations now that we have early evidence", owner: "You", when: "Week 12" },
      { id: "p3-13", task: "Day-90 review: full pipeline audit, define Q2 strategy", owner: "Together", when: "End of month" },
      { id: "p3-14", task: "Write the playbook — what worked at each stage, codified for repeatability", owner: "You", when: "End of month" },
    ],
  },
];


// ==========================================================
// ROADMAP VIEW — interactive 30/60/90 timeline
// ==========================================================
function RoadmapView() {
  const [completed, setCompleted] = useState({});
  const [expandedPhases, setExpandedPhases] = useState({ p1: true, p2: false, p3: false });
  const [loading, setLoading] = useState(true);

  // Hydrate from storage on mount
  useEffect(() => {
    (async () => {
      const state = await loadRoadmapState();
      setCompleted(state.completed || {});
      setExpandedPhases(state.expandedPhases || { p1: true, p2: false, p3: false });
      setLoading(false);
    })();
  }, []);

  const toggleTask = useCallback((taskId) => {
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[taskId]) {
        delete next[taskId];
      } else {
        next[taskId] = new Date().toISOString();
      }
      saveRoadmapState({ completed: next, expandedPhases });
      return next;
    });
  }, [expandedPhases]);

  const togglePhase = useCallback((phaseId) => {
    setExpandedPhases((prev) => {
      const next = { ...prev, [phaseId]: !prev[phaseId] };
      saveRoadmapState({ completed, expandedPhases: next });
      return next;
    });
  }, [completed]);

  const resetAll = () => {
    if (confirm("Reset all roadmap progress? This will uncheck every task. Cannot be undone.")) {
      setCompleted({});
      saveRoadmapState({ completed: {}, expandedPhases });
    }
  };

  const totalTasks = ROADMAP_DATA.reduce((sum, p) => sum + p.tasks.length, 0);
  const completedTasks = Object.keys(completed).length;
  const overallPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  if (loading) {
    return (
      <div style={{ padding: 60, textAlign: "center" }}>
        <div className="display-font" style={{ fontSize: 22, color: COLORS.primary }}>
          LOADING ROADMAP…
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero header */}
      <div className="comic-panel" style={{
        background: COLORS.bgDark,
        color: "white",
        padding: "26px 26px 22px",
        marginBottom: 24,
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="halftone" style={{ position: "absolute", inset: 0, opacity: 0.12 }} />
        <div style={{ position: "relative" }}>
          <div className="blocky-font" style={{ fontSize: 11, color: COLORS.pop, letterSpacing: "0.12em", marginBottom: 6 }}>
            THE 90-DAY PLAN
          </div>
          <div className="display-font" style={{
            fontSize: 36,
            color: "white",
            textShadow: `3px 3px 0 ${COLORS.primary}`,
            lineHeight: 1,
            marginBottom: 8,
          }}>
            FROM READY TO COMPOUNDING.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.92, maxWidth: 720, marginBottom: 18 }}>
            Three phases. One mission. Foundation → Conversion → Compounding. Check off tasks as you go — your progress saves automatically.
          </div>

          {/* Overall progress bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 240px", minWidth: 220 }}>
              <div style={{
                background: "rgba(255,255,255,0.15)",
                border: `2.5px solid ${COLORS.ink}`,
                height: 26,
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.pink} 50%, ${COLORS.green} 100%)`,
                  width: `${overallPct}%`,
                  height: "100%",
                  transition: "width 0.6s cubic-bezier(.22,.9,.37,1)",
                  borderRight: overallPct > 0 && overallPct < 100 ? `2.5px solid ${COLORS.ink}` : "none",
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Bowlby One', sans-serif",
                  fontSize: 13,
                  color: "white",
                  textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
                  letterSpacing: "0.04em",
                }}>
                  {completedTasks} / {totalTasks} TASKS · {overallPct}%
                </div>
              </div>
            </div>
            {completedTasks > 0 && (
              <button
                onClick={resetAll}
                className="comic-button"
                style={{
                  background: "white",
                  color: COLORS.ink,
                  padding: "8px 14px",
                  fontSize: 11,
                }}
              >
                ⟲ Reset all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: 8 }}>
        {/* Connecting vertical line behind everything */}
        <div style={{
          position: "absolute",
          left: 28,
          top: 50,
          bottom: 50,
          width: 4,
          background: `repeating-linear-gradient(
            to bottom,
            ${COLORS.ink} 0,
            ${COLORS.ink} 8px,
            transparent 8px,
            transparent 14px
          )`,
          zIndex: 0,
        }} />

        {ROADMAP_DATA.map((phase, phaseIdx) => (
          <PhaseSection
            key={phase.id}
            phase={phase}
            phaseIndex={phaseIdx}
            isExpanded={expandedPhases[phase.id]}
            onToggleExpand={() => togglePhase(phase.id)}
            completed={completed}
            onToggleTask={toggleTask}
          />
        ))}

        {/* Finish marker */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          marginTop: 4,
          position: "relative",
          zIndex: 1,
        }}>
          <div style={{
            width: 60,
            height: 60,
            background: COLORS.pop,
            border: `4px solid ${COLORS.ink}`,
            boxShadow: `5px 5px 0 ${COLORS.ink}`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 28,
            color: COLORS.ink,
            flexShrink: 0,
          }}>
            ★
          </div>
          <div className="comic-panel" style={{
            background: "white",
            padding: "16px 22px",
            flex: 1,
          }}>
            <div className="display-font" style={{
              fontSize: 22,
              color: COLORS.ink,
              textShadow: `2px 2px 0 ${COLORS.pop}`,
              lineHeight: 1,
              marginBottom: 4,
            }}>
              DAY 90 — THEN WE GO AGAIN.
            </div>
            <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.55, opacity: 0.85 }}>
              By the end of 90 days you'll have podcasts live, school pilots running, foundation conversations open, and a system you can scale, hand off, or hand back. Q2 starts from there.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhaseSection({ phase, phaseIndex, isExpanded, onToggleExpand, completed, onToggleTask }) {
  const tasksDone = phase.tasks.filter((t) => completed[t.id]).length;
  const tasksTotal = phase.tasks.length;
  const phasePct = tasksTotal > 0 ? Math.round((tasksDone / tasksTotal) * 100) : 0;
  const phaseDone = tasksDone === tasksTotal;

  return (
    <div style={{ position: "relative", marginBottom: 30, zIndex: 1 }}>
      {/* Phase header — always visible, clickable to expand */}
      <div style={{ display: "flex", alignItems: "stretch", gap: 18 }}>
        {/* Phase milestone marker */}
        <div style={{
          width: 60,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{
            width: 60,
            height: 60,
            background: phaseDone ? COLORS.green : phase.color,
            border: `4px solid ${COLORS.ink}`,
            boxShadow: `5px 5px 0 ${COLORS.ink}`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 22,
            color: "white",
            textShadow: `2px 2px 0 ${COLORS.ink}`,
            transition: "background 0.3s",
          }}>
            {phaseDone ? "✓" : phaseIndex + 1}
          </div>
        </div>

        {/* Phase content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <button
            onClick={onToggleExpand}
            style={{
              width: "100%",
              background: "white",
              border: `3px solid ${COLORS.ink}`,
              boxShadow: `5px 5px 0 ${COLORS.ink}`,
              padding: "16px 20px",
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "inherit",
              borderLeft: `8px solid ${phase.color}`,
              transition: "transform 0.12s, box-shadow 0.12s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-1px, -1px)";
              e.currentTarget.style.boxShadow = `6px 6px 0 ${COLORS.ink}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = `5px 5px 0 ${COLORS.ink}`;
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="blocky-font" style={{
                  fontSize: 11,
                  color: phase.color,
                  letterSpacing: "0.1em",
                  marginBottom: 4,
                }}>
                  {phase.label}
                </div>
                <div className="display-font" style={{
                  fontSize: 30,
                  color: COLORS.ink,
                  textShadow: `2px 2px 0 ${phase.color}`,
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {phase.title}
                </div>
                <div style={{
                  fontSize: 13,
                  color: COLORS.ink,
                  fontStyle: "italic",
                  opacity: 0.75,
                }}>
                  Theme: {phase.theme}
                </div>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
                flexShrink: 0,
              }}>
                <div style={{
                  background: phaseDone ? COLORS.green : phase.color,
                  color: "white",
                  fontFamily: "'Bowlby One', sans-serif",
                  fontSize: 14,
                  padding: "5px 12px",
                  border: `2.5px solid ${COLORS.ink}`,
                  textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
                  letterSpacing: "0.04em",
                }}>
                  {tasksDone}/{tasksTotal}
                </div>
                <div style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: COLORS.ink,
                  opacity: 0.6,
                  letterSpacing: "0.05em",
                }}>
                  {isExpanded ? "▼ HIDE" : "▶ SHOW TASKS"}
                </div>
              </div>
            </div>

            {/* Mini progress bar */}
            <div style={{
              marginTop: 14,
              height: 8,
              background: "#F3F4F6",
              border: `1.5px solid ${COLORS.ink}`,
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${phasePct}%`,
                background: phaseDone ? COLORS.green : phase.color,
                transition: "width 0.5s cubic-bezier(.22,.9,.37,1)",
              }} />
            </div>
          </button>

          {/* Expandable strategic context + tasks */}
          {isExpanded && (
            <div style={{
              marginTop: 14,
              marginLeft: 14,
              paddingLeft: 18,
              borderLeft: `3px dashed ${phase.color}`,
            }}>
              {/* Strategic context */}
              <div style={{
                background: "#FFF8E7",
                border: `2px solid ${COLORS.ink}`,
                padding: "14px 16px",
                marginBottom: 14,
                position: "relative",
              }}>
                <div className="blocky-font" style={{
                  fontSize: 10,
                  color: phase.color,
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}>
                  WHY THIS PHASE
                </div>
                <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.6, marginBottom: 12 }}>
                  {phase.intro}
                </div>
                <div className="blocky-font" style={{
                  fontSize: 10,
                  color: phase.color,
                  letterSpacing: "0.1em",
                  marginBottom: 6,
                }}>
                  MILESTONE
                </div>
                <div style={{ fontSize: 13, color: COLORS.ink, lineHeight: 1.55, fontStyle: "italic" }}>
                  {phase.milestone}
                </div>
              </div>

              {/* Tasks */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {phase.tasks.map((t) => (
                  <TaskCard
                    key={t.id}
                    task={t}
                    isDone={!!completed[t.id]}
                    onToggle={() => onToggleTask(t.id)}
                    phaseColor={phase.color}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TaskCard({ task, isDone, onToggle, phaseColor }) {
  const ownerColor = task.owner === "Tiffany" ? COLORS.pink :
                     task.owner === "You" ? COLORS.primary :
                     COLORS.gold;

  return (
    <div
      onClick={onToggle}
      style={{
        background: isDone ? "#ECFDF5" : "white",
        border: `2.5px solid ${isDone ? COLORS.green : COLORS.ink}`,
        boxShadow: `3px 3px 0 ${COLORS.ink}`,
        padding: "11px 14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        transition: "transform 0.1s, box-shadow 0.1s, background 0.2s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-1px, -1px)";
        e.currentTarget.style.boxShadow = `4px 4px 0 ${COLORS.ink}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0, 0)";
        e.currentTarget.style.boxShadow = `3px 3px 0 ${COLORS.ink}`;
      }}
    >
      {/* Custom checkbox */}
      <div style={{
        width: 22,
        height: 22,
        flexShrink: 0,
        background: isDone ? COLORS.green : "white",
        border: `2.5px solid ${COLORS.ink}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Bowlby One', sans-serif",
        fontSize: 14,
        color: "white",
        textShadow: isDone ? `1px 1px 0 ${COLORS.ink}` : "none",
        transition: "background 0.18s",
        marginTop: 1,
      }}>
        {isDone && "✓"}
      </div>

      {/* Task text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 13,
          color: COLORS.ink,
          lineHeight: 1.5,
          textDecoration: isDone ? "line-through" : "none",
          opacity: isDone ? 0.6 : 1,
          transition: "opacity 0.2s",
        }}>
          {task.task}
        </div>
      </div>

      {/* Owner & timing badges */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 4,
        flexShrink: 0,
      }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 9,
          fontWeight: 800,
          color: "white",
          background: ownerColor,
          border: `1.5px solid ${COLORS.ink}`,
          padding: "2px 7px",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}>
          {task.owner}
        </div>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          color: COLORS.ink,
          opacity: 0.6,
          whiteSpace: "nowrap",
        }}>
          {task.when}
        </div>
      </div>
    </div>
  );
}


// ==========================================================
// PITCH VIEW — public-facing story
// ==========================================================
function PitchView() {
  return (
    <div style={{ background: COLORS.bg }}>
      <PitchHero />
      <PitchProblem />
      <PitchSolution />
      <PitchThreeWays />
      <PitchInclusivity />
      <PitchEcosystem />
      <PitchTracks />
      <PitchTrust />
      <PitchCTA />
      <PitchFooter />
    </div>
  );
}

function PitchHero() {
  return (
    <section style={{
      background: COLORS.bgDark,
      color: "white",
      padding: "60px 20px 80px",
      position: "relative",
      overflow: "hidden",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      {/* Burst rays */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          repeating-conic-gradient(from 30deg at 70% 40%,
            transparent 0deg,
            transparent 22deg,
            rgba(245, 158, 11, 0.08) 22deg,
            rgba(245, 158, 11, 0.08) 26deg)
        `,
      }} />
      <div className="halftone" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />

      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 30,
        alignItems: "center",
      }}>
        <div>
          <div style={{
            display: "inline-block",
            background: COLORS.pop,
            color: COLORS.ink,
            padding: "5px 12px",
            border: `2.5px solid ${COLORS.ink}`,
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 12,
            letterSpacing: "0.06em",
            marginBottom: 18,
            transform: "rotate(-2deg)",
          }}>
            ★ A PARTNERSHIP INVITATION ★
          </div>
          <h1 className="display-font" style={{
            fontSize: "clamp(40px, 8vw, 78px)",
            lineHeight: 0.95,
            margin: "0 0 20px",
            color: "white",
            textShadow: `4px 4px 0 ${COLORS.primary}, 8px 8px 0 ${COLORS.ink}`,
          }}>
            BRING <span style={{ color: COLORS.pop }}>CONSENT</span> TO YOUR COMMUNITY.
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.5,
            opacity: 0.92,
            marginBottom: 24,
            maxWidth: 560,
          }}>
            Consent Comics turns hard conversations into stories kids actually remember.
            We're partnering with schools, nonprofits, and mission-aligned funders to put this
            work in the hands of the young people who need it most.
          </p>
        </div>

        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 280,
        }}>
          {/* Big comic burst star */}
          <svg width="280" height="280" viewBox="0 0 280 280" style={{
            filter: `drop-shadow(8px 8px 0 ${COLORS.primary})`,
          }}>
            <polygon
              points="140,15 162,90 240,80 180,135 220,205 140,170 60,205 100,135 40,80 118,90"
              fill={COLORS.pop}
              stroke={COLORS.ink}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <text
              x="140"
              y="135"
              textAnchor="middle"
              fontFamily="'Bangers', 'Impact', sans-serif"
              fontSize="56"
              fill={COLORS.ink}
              style={{ letterSpacing: "0.04em" }}
            >
              CONSENT
            </text>
            <text
              x="140"
              y="178"
              textAnchor="middle"
              fontFamily="'Bangers', 'Impact', sans-serif"
              fontSize="38"
              fill={COLORS.primary}
              style={{ letterSpacing: "0.04em" }}
            >
              MATTERS
            </text>
          </svg>
          <div className="speech-bubble" style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: "rotate(-4deg)",
            color: COLORS.ink,
            fontFamily: "'Bowlby One', sans-serif",
            fontSize: 16,
            maxWidth: 220,
          }}>
            CONSENT LOOKS GOOD ON YOU!
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchProblem() {
  const stats = [
    { num: "1 in 4", label: "Girls experience sexual abuse before 18" },
    { num: "1 in 6", label: "Boys experience sexual abuse before 18" },
    { num: "<60%", label: "Of US schools teach consent in any form" },
    { num: "K–12", label: "Where consent literacy starts — and rarely lands" },
  ];
  return (
    <section style={{
      background: "white",
      padding: "60px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="blocky-font" style={{
            fontSize: 12,
            color: COLORS.primary,
            marginBottom: 6,
            letterSpacing: "0.1em",
          }}>
            THE PROBLEM
          </div>
          <h2 className="display-font" style={{
            fontSize: "clamp(32px, 5.5vw, 52px)",
            margin: 0,
            color: COLORS.ink,
            textShadow: `3px 3px 0 ${COLORS.pop}`,
            lineHeight: 1,
          }}>
            CONSENT IS TAUGHT BADLY,<br />OR NOT AT ALL.
          </h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: COLORS.ink,
            marginTop: 22,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            Most consent education arrives too late, lectures more than it teaches, and excludes the boys and men we most need at the table.
            Survivors are told they're broken; learners are told to be careful. Nobody learns what a healthy "yes" actually looks like.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 14,
        }}>
          {stats.map((s, i) => (
            <div key={i} className="comic-panel" style={{
              background: i % 2 === 0 ? COLORS.cream : "white",
              padding: "20px 16px",
              textAlign: "center",
            }}>
              <div className="display-font" style={{
                fontSize: 36,
                color: COLORS.primary,
                lineHeight: 1,
                textShadow: `2px 2px 0 ${COLORS.ink}`,
              }}>
                {s.num}
              </div>
              <div style={{
                fontSize: 12,
                color: COLORS.ink,
                marginTop: 8,
                fontWeight: 600,
                lineHeight: 1.4,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 28,
          fontSize: 11,
          color: COLORS.ink,
          opacity: 0.5,
          textAlign: "center",
          fontStyle: "italic",
        }}>
          Statistics from CDC, RAINN, NSVRC, and NCSSLE — illustrative ranges; verify in final pitches.
        </div>
      </div>
    </section>
  );
}

function PitchSolution() {
  return (
    <section id="how" style={{
      background: COLORS.primary,
      color: "white",
      padding: "60px 20px",
      position: "relative",
      overflow: "hidden",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      <div className="halftone" style={{ position: "absolute", inset: 0, opacity: 0.18 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div className="blocky-font" style={{
            fontSize: 12,
            color: COLORS.pop,
            marginBottom: 6,
            letterSpacing: "0.1em",
          }}>
            THE APPROACH
          </div>
          <h2 className="display-font" style={{
            fontSize: "clamp(32px, 5.5vw, 52px)",
            margin: 0,
            textShadow: `3px 3px 0 ${COLORS.ink}`,
            lineHeight: 1,
          }}>
            WE TURN LESSONS<br />INTO INSTINCTS.
          </h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.6,
            marginTop: 22,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0.95,
          }}>
            Consent Comics teaches consent through illustrated, real-life scenarios — peer pressure, dating, photos, food, friendships.
            When learners <em>see</em> a moment and feel its impact, the lesson sticks.
            No lectures. No shame. Just stories that show what respect looks and sounds like.
          </p>
        </div>
      </div>
    </section>
  );
}


function PitchThreeWays() {
  const versions = [
    {
      title: "LINES CROSSED",
      tagline: "What harm looks like",
      desc: "Someone crosses a boundary, doubles down, refuses to apologize. The version that names the behavior so we can recognize it in the wild.",
      color: COLORS.red,
    },
    {
      title: "APOLOGIES MATTER",
      tagline: "What accountability looks like",
      desc: "Same person, same mistake — but they pause, listen, apologize, and change. Because nobody is perfect, and repair is part of the work.",
      color: COLORS.gold,
    },
    {
      title: "A BETTER WAY",
      tagline: "What respect looks like from the start",
      desc: "The standard we're aiming for — checking in, honoring the answer, treating the other person as a whole human from the first moment.",
      color: COLORS.green,
    },
  ];

  return (
    <section style={{
      background: COLORS.bg,
      padding: "60px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="blocky-font" style={{
            fontSize: 12,
            color: COLORS.primary,
            marginBottom: 6,
            letterSpacing: "0.1em",
          }}>
            THE FORMAT
          </div>
          <h2 className="display-font" style={{
            fontSize: "clamp(32px, 5.5vw, 52px)",
            margin: 0,
            color: COLORS.ink,
            textShadow: `3px 3px 0 ${COLORS.pop}`,
            lineHeight: 1,
          }}>
            ONE STORY,<br />THREE WAYS.
          </h2>
          <p style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: COLORS.ink,
            marginTop: 18,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            Every scenario plays out three times. Same setup. Three different choices.
            Readers don't just learn what consent <em>is</em> — they see what it <em>does</em>.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}>
          {versions.map((v, i) => (
            <div key={v.title} className="comic-panel" style={{
              background: "white",
              padding: 20,
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: -14,
                left: 16,
                background: v.color,
                color: "white",
                padding: "5px 12px",
                border: `2.5px solid ${COLORS.ink}`,
                fontFamily: "'Bowlby One', sans-serif",
                fontSize: 11,
                letterSpacing: "0.06em",
                textShadow: `1.5px 1.5px 0 ${COLORS.ink}`,
              }}>
                VERSION {i + 1}
              </div>
              <h3 className="display-font" style={{
                fontSize: 26,
                margin: "10px 0 4px",
                color: v.color,
                textShadow: `2px 2px 0 ${COLORS.ink}`,
              }}>
                {v.title}
              </h3>
              <div style={{
                fontSize: 12,
                color: COLORS.ink,
                fontStyle: "italic",
                marginBottom: 12,
                opacity: 0.7,
              }}>
                {v.tagline}
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: COLORS.ink, margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PitchInclusivity() {
  return (
    <section style={{
      background: COLORS.cream,
      padding: "60px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: 36,
          alignItems: "center",
        }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              maxWidth: 280,
            }}>
              {[
                { color: COLORS.pink, label: "EVERY", sub: "GENDER" },
                { color: COLORS.green, label: "EVERY", sub: "CULTURE" },
                { color: COLORS.gold, label: "EVERY", sub: "ABILITY" },
                { color: COLORS.primary, label: "EVERY", sub: "AGE" },
              ].map((b, i) => (
                <div key={i} style={{
                  background: b.color,
                  border: `3px solid ${COLORS.ink}`,
                  boxShadow: `4px 4px 0 ${COLORS.ink}`,
                  padding: "18px 12px",
                  textAlign: "center",
                  color: "white",
                  transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                  fontFamily: "'Bowlby One', 'Impact', sans-serif",
                  textShadow: `2px 2px 0 ${COLORS.ink}`,
                }}>
                  <div style={{ fontSize: 14, opacity: 0.95 }}>{b.label}</div>
                  <div style={{ fontSize: 22, marginTop: 2 }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="blocky-font" style={{
              fontSize: 12,
              color: COLORS.primary,
              marginBottom: 6,
              letterSpacing: "0.1em",
            }}>
              BUILT FOR EVERYONE
            </div>
            <h2 className="display-font" style={{
              fontSize: "clamp(28px, 4.8vw, 44px)",
              margin: 0,
              color: COLORS.ink,
              lineHeight: 1,
              textShadow: `3px 3px 0 ${COLORS.pink}`,
            }}>
              CONSENT IS FOR<br />EVERYONE.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 18, color: COLORS.ink }}>
              Our characters are intentionally genderless and race-neutral. Readers project themselves into every story —
              regardless of gender, sexuality, culture, religion, or who anyone says they're "supposed" to be.
            </p>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: "16px 0 0",
              display: "grid",
              gap: 10,
            }}>
              {[
                ["★", "A Letter to the Guys — boys and men are explicitly welcome, not the enemy"],
                ["★", "Deaf characters using sign language are part of the story, not a footnote"],
                ["★", "Everyday consent — food, photos, peer pressure, friendships — not just sex ed"],
                ["★", "K–3 to college: the same character work scales across age groups"],
              ].map(([icon, text]) => (
                <li key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: COLORS.pink, fontSize: 18, fontWeight: 800 }}>{icon}</span>
                  <span style={{ fontSize: 14, color: COLORS.ink, lineHeight: 1.5 }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchEcosystem() {
  const products = [
    {
      title: "THE BOOK",
      sub: "Consent Comics",
      desc: "The 64-page graphic novel — the foundational story that lets readers feel consent before they're asked to define it.",
      color: COLORS.primary,
      icon: "📖",
    },
    {
      title: "THE CURRICULUM",
      sub: "K–12 lessons",
      desc: "Classroom-ready discussion guides, conversation kits, and SEL-aligned activities. Built to scale across districts.",
      color: COLORS.pink,
      icon: "✏️",
    },
    {
      title: "THE E-COURSES",
      sub: "Customizable training",
      desc: '"Choose your own adventure" interactive courses — customizable for colleges, athletic departments, sports leagues, talent agencies, and corporations.',
      color: COLORS.green,
      icon: "💻",
    },
  ];
  return (
    <section style={{
      background: COLORS.bgDark,
      color: "white",
      padding: "60px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="halftone" style={{ position: "absolute", inset: 0, opacity: 0.1 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="blocky-font" style={{
            fontSize: 12,
            color: COLORS.pop,
            marginBottom: 6,
            letterSpacing: "0.1em",
          }}>
            THE ECOSYSTEM
          </div>
          <h2 className="display-font" style={{
            fontSize: "clamp(30px, 5vw, 48px)",
            margin: 0,
            textShadow: `3px 3px 0 ${COLORS.ink}`,
            lineHeight: 1,
          }}>
            THREE PRODUCTS,<br />ONE MISSION.
          </h2>
          <p style={{
            fontSize: 15,
            lineHeight: 1.6,
            marginTop: 16,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0.92,
          }}>
            Each piece reinforces the others. Start with the book. Scale with the curriculum.
            Customize with the e-course. Same characters. Same approach. Different doors in.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18,
        }}>
          {products.map((p) => (
            <div key={p.title} className="comic-panel" style={{
              background: "white",
              padding: 22,
              color: COLORS.ink,
            }}>
              <div style={{
                width: 50,
                height: 50,
                background: p.color,
                border: `3px solid ${COLORS.ink}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                marginBottom: 14,
              }}>
                {p.icon}
              </div>
              <div className="blocky-font" style={{
                fontSize: 11,
                color: p.color,
                letterSpacing: "0.08em",
                marginBottom: 4,
              }}>
                {p.sub.toUpperCase()}
              </div>
              <h3 className="display-font" style={{
                fontSize: 22,
                margin: "0 0 8px",
                textShadow: `2px 2px 0 ${p.color}`,
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: COLORS.ink, opacity: 0.85, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function PitchTracks() {
  const tracks = [
    {
      label: "FOR SCHOOLS",
      headline: "Bring it into your classrooms.",
      bullets: [
        "K-12 curriculum aligned with SEL standards",
        "Conversation kits for counselors & teachers",
        "Title IX-ready for middle, high school & college",
        "Free comic excerpts available now at consentcomics.com",
      ],
      cta: "Talk to our schools team",
      color: COLORS.primary,
    },
    {
      label: "FOR NONPROFITS",
      headline: "Equip the people you serve.",
      bullets: [
        "Co-branded conversation kits for shelter & advocacy intake",
        "Resources for survivor groups & support networks",
        "Bulk distribution to youth programs",
        "Collaborate on culturally specific adaptations",
      ],
      cta: "Explore a partnership",
      color: COLORS.pink,
    },
    {
      label: "FOR SPONSORS & FUNDERS",
      headline: "Fund access for underserved communities.",
      bullets: [
        "Sponsor copies for Title I schools & DV shelters",
        "Underwrite e-courses for your community focus area",
        "Co-create scenarios reflecting your values",
        "Measurable distribution & engagement reporting",
      ],
      cta: "Discuss sponsorship",
      color: COLORS.gold,
    },
  ];
  return (
    <section style={{
      background: "white",
      padding: "60px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="blocky-font" style={{
            fontSize: 12,
            color: COLORS.primary,
            marginBottom: 6,
            letterSpacing: "0.1em",
          }}>
            WAYS TO PARTNER
          </div>
          <h2 className="display-font" style={{
            fontSize: "clamp(32px, 5.5vw, 52px)",
            margin: 0,
            color: COLORS.ink,
            textShadow: `3px 3px 0 ${COLORS.pop}`,
            lineHeight: 1,
          }}>
            FIND YOUR<br />ENTRY POINT.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}>
          {tracks.map((t) => (
            <div key={t.label} className="comic-panel" style={{
              background: COLORS.bg,
              padding: 22,
              borderTop: `8px solid ${t.color}`,
            }}>
              <div className="blocky-font" style={{
                fontSize: 11,
                color: t.color,
                letterSpacing: "0.1em",
                marginBottom: 6,
              }}>
                {t.label}
              </div>
              <h3 className="display-font" style={{
                fontSize: 22,
                margin: "0 0 14px",
                color: COLORS.ink,
                lineHeight: 1.05,
                textShadow: `2px 2px 0 ${t.color}`,
              }}>
                {t.headline}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                {t.bullets.map((b) => (
                  <li key={b} style={{
                    fontSize: 13,
                    color: COLORS.ink,
                    lineHeight: 1.5,
                    paddingLeft: 18,
                    position: "relative",
                    marginBottom: 8,
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      color: t.color,
                      fontWeight: 800,
                    }}>★</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PitchTrust() {
  const advisors = [
    { name: "Rita Smith", role: "National DV Expert & Survivor Advocate" },
    { name: "Dr. Brendan Kwiatkowski-Hartman", role: "Founder, Remasculine — Male Education Consultant" },
    { name: "Dr. Skip Speer", role: "Clinical Sexologist" },
    { name: "Dr. Judie Lomax", role: "Gallaudet University, Counseling & Psychological Services" },
    { name: "Deborah Saenz", role: "Editor" },
  ];
  return (
    <section style={{
      background: COLORS.bg,
      padding: "60px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <div className="blocky-font" style={{
            fontSize: 12,
            color: COLORS.primary,
            marginBottom: 6,
            letterSpacing: "0.1em",
          }}>
            BUILT WITH EXPERTS
          </div>
          <h2 className="display-font" style={{
            fontSize: "clamp(28px, 4.5vw, 42px)",
            margin: 0,
            color: COLORS.ink,
            textShadow: `3px 3px 0 ${COLORS.pop}`,
            lineHeight: 1,
          }}>
            REVIEWED BY THE PEOPLE<br />WHO DO THIS WORK.
          </h2>
        </div>
        <div style={{
          background: "white",
          padding: "26px 22px",
          border: `3px solid ${COLORS.ink}`,
          boxShadow: `5px 5px 0 ${COLORS.ink}`,
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}>
            {advisors.map((a) => (
              <div key={a.name} style={{
                paddingLeft: 14,
                borderLeft: `3px solid ${COLORS.primary}`,
              }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: COLORS.ink, marginBottom: 2 }}>
                  {a.name}
                </div>
                <div style={{ fontSize: 12, color: COLORS.ink, opacity: 0.7, lineHeight: 1.4 }}>
                  {a.role}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 22,
            paddingTop: 18,
            borderTop: `2px dashed ${COLORS.ink}`,
            fontSize: 13,
            color: COLORS.ink,
            opacity: 0.85,
            fontStyle: "italic",
            lineHeight: 1.55,
          }}>
            "Some people sleep at night, and some people stay up creating. I'm the latter — fueled by the belief that
            education is one of the best ways to ensure people treat themselves and others with respect.
            Consent Comics is the work I wish someone had given me."
            <div style={{ fontStyle: "normal", fontWeight: 700, marginTop: 8, opacity: 1 }}>
              — Tiffany Braxton, founder & author
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchCTA() {
  return (
    <section style={{
      background: COLORS.pop,
      padding: "70px 20px",
      borderBottom: `4px solid ${COLORS.ink}`,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `repeating-linear-gradient(45deg, transparent 0, transparent 12px, rgba(0,0,0,0.03) 12px, rgba(0,0,0,0.03) 13px)`,
      }} />
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}>
        <div className="display-font" style={{
          fontSize: "clamp(36px, 6vw, 60px)",
          color: COLORS.ink,
          lineHeight: 0.95,
          textShadow: `4px 4px 0 white, 6px 6px 0 ${COLORS.ink}`,
          marginBottom: 18,
        }}>
          LET'S START A<br />CONVERSATION.
        </div>
        <p style={{
          fontSize: 17,
          color: COLORS.ink,
          lineHeight: 1.55,
          marginBottom: 36,
          maxWidth: 620,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Whether you're a school district looking for curriculum, a nonprofit serving survivors,
          or a funder ready to put consent education in more hands — we'd love to hear from you.
        </p>

        {/* Static contact info card — looks like a poster, not a button */}
        <div style={{
          display: "inline-block",
          background: "white",
          border: `4px solid ${COLORS.ink}`,
          boxShadow: `8px 8px 0 ${COLORS.ink}`,
          padding: "26px 40px",
        }}>
          <div className="blocky-font" style={{
            fontSize: 11,
            color: COLORS.primary,
            letterSpacing: "0.14em",
            marginBottom: 10,
          }}>
            GET IN TOUCH
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: COLORS.ink,
            marginBottom: 6,
            letterSpacing: "0.01em",
          }}>
            connect@consentcomics.com
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18,
            fontWeight: 500,
            color: COLORS.primary,
            letterSpacing: "0.01em",
          }}>
            consentcomics.com
          </div>
        </div>
      </div>
    </section>
  );
}

function PitchFooter() {
  return (
    <footer style={{
      background: COLORS.bgDark,
      color: "white",
      padding: "40px 20px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="display-font" style={{
          fontSize: 24,
          color: COLORS.pop,
          textShadow: `2px 2px 0 ${COLORS.ink}`,
          marginBottom: 6,
          lineHeight: 1.1,
        }}>
          CONSENT LOOKS GOOD ON YOU.
        </div>
        <div style={{ fontSize: 11, opacity: 0.6, marginTop: 14 }}>
          © 2026 Consent Comics — A Penspires production
        </div>
      </div>
    </footer>
  );
}

