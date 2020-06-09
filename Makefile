deploy:
	yarn
	yarn build
	@make convert-netlify-redirect-to-firebase
	./node_modules/.bin/firebase deploy
	@make clean

clean:
	git restore firebase.json --source HEAD
	test ! -f firebase.json.tmp || rm firebase.json.tmp

convert-netlify-redirect-to-firebase:
	grep -v -e '^#' -e '^http' public/_redirects \
	  | jq -nR '{redirects: [inputs | select(length>0)] | map(split("  ")) | map({"source": .[0], "destination": .[1], "type": .[2]})}' \
	  | jq -s '.[0] * .[1]' firebase.json - \
	  > firebase.json.tmp
	rm firebase.json
	mv firebase.json.tmp firebase.json
