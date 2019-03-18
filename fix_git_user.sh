#!/bin/sh
# 修复github不显示提交记录问题，原因是提交的邮箱没有保存在github的邮箱列表，此脚本替换所有提交记录的邮箱

git filter-branch --env-filter '
OLD_EMAIL="mahy@us***.com"
CORRECT_NAME="mahy"
CORRECT_EMAIL="dsz9258@126.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
