#!/bin/bash

ARQUIVO="ifsc.key"

cat > ${ARQUIVO} << EOF
-----BEGIN OPENSSH PRIVATE KEY-----
${SSH_PRIVATE_KEY}