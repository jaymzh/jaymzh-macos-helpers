#!/bin/bash

# TODO: replace this with the Makefile once
#   https://github.com/pqrs-org/KE-complex_modifications-core/pull/2
# is merged

# In meantime
cd core
sandbox-exec -f files/generator.sb bash scripts/update-json.sh
