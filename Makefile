REPORTER = dot

all: test

clean:
	@rm -rf docs

test:
    @./node_modules/.bin/mocha \
		--reporter $(REPORTER)

docs:
	@mkdir -p docs/dfiles
	@node ./support/docs

.PHONY: test
