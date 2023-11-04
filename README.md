test use Github branch as dependency

use to add node_app_a and node_app_b to package dependencies and follow the main repo
npm i https://github.com/ebobo/node_app_a_repo.git#main
npm i https://github.com/ebobo/node_app_b_repo.git#main

NB: use "npm update" if the repo main branch is updated
or remove package-lock and node_modules/ do "npm i" again
