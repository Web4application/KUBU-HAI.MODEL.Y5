{
  "mcpServers": {
    "atlassian-rovo-mcp": {
      "command": "npx",
      "type": "local",
      "tools": ["*"],
      "args": [
        "mcp-remote@latest",
        "https://mcp.atlassian.com/v1/mcp",
        "--header",
        "Authorization: Basic $ATLASSIAN_API_KEY"
      ],
      "env": {
        "ATLASSIAN_API_KEY": "$COPILOT_MCP_ATLASSIAN_API_KEY"
      }
    }
  }
}
