echo "To branch: ${TO_BRANCH}"
echo "From branch: ${FROM_BRANCH}"

# Check if TO_BRANCH is either 'main' or 'staging'
if [ "${TO_BRANCH}" = "main" ]; then
    echo "Checking PR to main branch"
    if [ "${FROM_BRANCH}" != "staging" ] && ! echo "${FROM_BRANCH}" | grep -q "^hotfix/"; then
        echo "Error: Pull requests to main must come from staging or hotfix/* branches."
        exit 1
    fi
fi

if [ "${TO_BRANCH}" = "staging" ]; then
    echo "Checking PR to staging branch"
    if [ "${FROM_BRANCH}" != "develop" ] && ! echo "${FROM_BRANCH}" | grep -q "^hotfix/"; then
        echo "Error: Pull requests to staging must come from develop or hotfix/* branches."
        exit 1
    fi
fi

if [ "${TO_BRANCH}" = "develop" ]; then
    echo "Checking PR to develop branch"
    if ! echo "${FROM_BRANCH}" | grep -q "^feature/" && ! echo "${FROM_BRANCH}" | grep -q "^hotfix/"; then
        echo "Error: Pull requests to develop must come from feature/* or hotfix/* branches."
        exit 1
    fi
fi

echo "PR is valid or not checked."
