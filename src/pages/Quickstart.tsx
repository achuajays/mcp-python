
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import TabGroup from "@/components/TabGroup";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, AlertTriangle } from "lucide-react";

const Quickstart = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-4xl py-10">
          <h1 className="font-bold mb-6">
            <span className="gradient-text">Quickstart</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-2">For Server Developers</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started building your own server to use in Claude for Desktop and other clients.
          </p>

          <div className="prose prose-slate max-w-none">
            <p>
              In this tutorial, we'll build a simple MCP weather server and connect it to a host, Claude for Desktop. 
              We'll start with a basic setup, and then progress to more complex use cases.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">What we'll be building</h2>
            <p>
              Many LLMs do not currently have the ability to fetch the forecast and severe weather alerts. 
              Let's use MCP to solve that!
            </p>
            <p>
              We'll build a server that exposes two tools: <code>get-alerts</code> and <code>get-forecast</code>. 
              Then we'll connect the server to an MCP host (in this case, Claude for Desktop):
            </p>

            <div className="bg-muted/50 p-4 rounded-md my-6 border">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <p className="text-sm">
                    Servers can connect to any client. We've chosen Claude for Desktop here for simplicity, 
                    but we also have guides on building your own client as well as a list of other clients here.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md my-6 border border-yellow-200 dark:border-yellow-700">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-800 dark:text-yellow-400">
                    Why Claude for Desktop and not Claude.ai?
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Core MCP Concepts</h2>
            <p>
              MCP servers can provide three main types of capabilities:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li><strong>Resources:</strong> File-like data that can be read by clients (like API responses or file contents)</li>
              <li><strong>Tools:</strong> Functions that can be called by the LLM (with user approval)</li>
              <li><strong>Prompts:</strong> Pre-written templates that help users accomplish specific tasks</li>
            </ul>
            <p>
              This tutorial will primarily focus on tools.
            </p>

            <TabGroup
              tabs={[
                {
                  key: "python",
                  label: "Python",
                  default: true,
                  content: <p>Let's get started with building our weather server! You can find the complete code for what we'll be building <a href="https://github.com/anthropics/anthropic-tools/tree/main/mcp" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">here</a>.</p>
                },
                {
                  key: "node",
                  label: "Node",
                  content: <p>Node.js implementation details will be provided in a future update.</p>
                },
                {
                  key: "java",
                  label: "Java",
                  content: <p>Java implementation details will be provided in a future update.</p>
                },
                {
                  key: "kotlin",
                  label: "Kotlin",
                  content: <p>Kotlin implementation details will be provided in a future update.</p>
                },
                {
                  key: "csharp",
                  label: "C#",
                  content: <p>C# implementation details will be provided in a future update.</p>
                }
              ]}
            />

            <h2 className="text-2xl font-semibold mt-12 mb-4">Prerequisite knowledge</h2>
            <p>
              This quickstart assumes you have familiarity with:
            </p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Python</li>
              <li>LLMs like Claude</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">System requirements</h2>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Python 3.10 or higher installed.</li>
              <li>You must use the Python MCP SDK 1.2.0 or higher.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Set up your environment</h2>
            <p>
              First, let's install uv and set up our Python project and environment:
            </p>

            <TabGroup
              tabs={[
                {
                  key: "macos-linux",
                  label: "MacOS/Linux",
                  default: true,
                  content: (
                    <CodeBlock 
                      code={`curl -LsSf https://astral.sh/uv/install.sh | sh`} 
                      title="Install uv"
                      language="bash"
                    />
                  )
                },
                {
                  key: "windows",
                  label: "Windows",
                  content: <p>Windows installation details will be provided in a future update.</p>
                }
              ]}
            />

            <p className="mt-4">
              Make sure to restart your terminal afterwards to ensure that the uv command gets picked up.
            </p>

            <p className="mt-4">
              Now, let's create and set up our project:
            </p>

            <TabGroup
              tabs={[
                {
                  key: "macos-linux",
                  label: "MacOS/Linux",
                  default: true,
                  content: (
                    <CodeBlock 
                      code={`# Create a new directory for our project
uv init weather
cd weather

# Create virtual environment and activate it
uv venv
source .venv/bin/activate

# Install dependencies
uv add "mcp[cli]" httpx

# Create our server file
touch weather.py`} 
                      language="bash"
                    />
                  )
                },
                {
                  key: "windows",
                  label: "Windows",
                  content: <p>Windows setup details will be provided in a future update.</p>
                }
              ]}
            />

            <p className="mt-4">
              Now let's dive into building your server.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Building your server</h2>
            <h3 className="text-xl font-semibold mt-8 mb-4">Importing packages and setting up the instance</h3>
            <p>
              Add these to the top of your weather.py:
            </p>

            <CodeBlock 
              code={`from typing import Any
import httpx
from mcp.server.fastmcp import FastMCP

# Initialize FastMCP server
mcp = FastMCP("weather")

# Constants
NWS_API_BASE = "https://api.weather.gov"
USER_AGENT = "weather-app/1.0"`} 
              language="python"
            />

            <p className="mt-4">
              The FastMCP class uses Python type hints and docstrings to automatically generate tool definitions, 
              making it easy to create and maintain MCP tools.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Helper functions</h3>
            <p>
              Next, let's add our helper functions for querying and formatting the data from the National Weather Service API:
            </p>

            <CodeBlock 
              code={`async def make_nws_request(url: str) -> dict[str, Any] | None:
    """Make a request to the NWS API with proper error handling."""
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "application/geo+json"
    }
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, headers=headers, timeout=30.0)
            response.raise_for_status()
            return response.json()
        except Exception:
            return None

def format_alert(feature: dict) -> str:
    """Format an alert feature into a readable string."""
    props = feature["properties"]
    return f"""
Event: {props.get('event', 'Unknown')}
Area: {props.get('areaDesc', 'Unknown')}
Severity: {props.get('severity', 'Unknown')}
Description: {props.get('description', 'No description available')}
Instructions: {props.get('instruction', 'No specific instructions provided')}
"""`} 
              language="python"
            />

            <h3 className="text-xl font-semibold mt-8 mb-4">Implementing tool execution</h3>
            <p>
              The tool execution handler is responsible for actually executing the logic of each tool. Let's add it:
            </p>

            <CodeBlock 
              code={`@mcp.tool()
async def get_alerts(state: str) -> str:
    """Get weather alerts for a US state.

    Args:
        state: Two-letter US state code (e.g. CA, NY)
    """
    url = f"{NWS_API_BASE}/alerts/active/area/{state}"
    data = await make_nws_request(url)

    if not data or "features" not in data:
        return "Unable to fetch alerts or no alerts found."

    if not data["features"]:
        return "No active alerts for this state."

    alerts = [format_alert(feature) for feature in data["features"]]
    return "\\n---\\n".join(alerts)

@mcp.tool()
async def get_forecast(latitude: float, longitude: float) -> str:
    """Get weather forecast for a location.

    Args:
        latitude: Latitude of the location
        longitude: Longitude of the location
    """
    # First get the forecast grid endpoint
    points_url = f"{NWS_API_BASE}/points/{latitude},{longitude}"
    points_data = await make_nws_request(points_url)

    if not points_data:
        return "Unable to fetch forecast data for this location."

    # Get the forecast URL from the points response
    forecast_url = points_data["properties"]["forecast"]
    forecast_data = await make_nws_request(forecast_url)

    if not forecast_data:
        return "Unable to fetch detailed forecast."

    # Format the periods into a readable forecast
    periods = forecast_data["properties"]["periods"]
    forecasts = []
    for period in periods[:5]:  # Only show next 5 periods
        forecast = f"""
{period['name']}:
Temperature: {period['temperature']}°{period['temperatureUnit']}
Wind: {period['windSpeed']} {period['windDirection']}
Forecast: {period['detailedForecast']}
"""
        forecasts.append(forecast)

    return "\\n---\\n".join(forecasts)`} 
              language="python"
              showLineNumbers={true}
            />

            <h3 className="text-xl font-semibold mt-8 mb-4">Running the server</h3>
            <p>
              Finally, let's initialize and run the server:
            </p>

            <CodeBlock 
              code={`if __name__ == "__main__":
    # Initialize and run the server
    mcp.run(transport='stdio')`} 
              language="python"
            />

            <p className="mt-4">
              Your server is complete! Run <code>uv run weather.py</code> to confirm that everything's working.
            </p>
            <p className="mt-2">
              Let's now test your server from an existing MCP host, Claude for Desktop.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Testing your server with Claude for Desktop</h2>
            <p className="mb-4">
              Claude for Desktop is not yet available on Linux. Linux users can proceed to the Building a client tutorial to build an MCP client that connects to the server we just built.
            </p>
            <p className="mb-4">
              First, make sure you have Claude for Desktop installed. You can install the latest version <a href="https://claude.ai/desktop" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">here</a>. 
              If you already have Claude for Desktop, make sure it's updated to the latest version.
            </p>

            <p className="mb-4">
              We'll need to configure Claude for Desktop for whichever MCP servers you want to use. 
              To do this, open your Claude for Desktop App configuration at <code>~/Library/Application Support/Claude/claude_desktop_config.json</code> in a text editor. 
              Make sure to create the file if it doesn't exist.
            </p>

            <p className="mb-4">
              For example, if you have VS Code installed:
            </p>

            <TabGroup
              tabs={[
                {
                  key: "macos-linux",
                  label: "MacOS/Linux",
                  default: true,
                  content: (
                    <CodeBlock 
                      code={`code ~/Library/Application\\ Support/Claude/claude_desktop_config.json`} 
                      language="bash"
                    />
                  )
                },
                {
                  key: "windows",
                  label: "Windows",
                  content: <p>Windows configuration details will be provided in a future update.</p>
                }
              ]}
            />

            <p className="mt-4">
              You'll then add your servers in the mcpServers key. The MCP UI elements will only show up in Claude for Desktop if at least one server is properly configured.
            </p>
            <p className="mt-2">
              In this case, we'll add our single weather server like so:
            </p>

            <TabGroup
              tabs={[
                {
                  key: "macos-linux",
                  label: "MacOS/Linux",
                  default: true,
                  content: null
                },
                {
                  key: "windows",
                  label: "Windows",
                  content: <p>Windows configuration details will be provided in a future update.</p>
                },
                {
                  key: "python",
                  label: "Python",
                  content: (
                    <CodeBlock 
                      code={`{
    "mcpServers": {
        "weather": {
            "command": "uv",
            "args": [
                "--directory",
                "/ABSOLUTE/PATH/TO/PARENT/FOLDER/weather",
                "run",
                "weather.py"
            ]
        }
    }
}`} 
                      language="json"
                    />
                  )
                }
              ]}
            />

            <p className="mt-4">
              You may need to put the full path to the uv executable in the command field. You can get this by running <code>which uv</code> on MacOS/Linux or <code>where uv</code> on Windows.
            </p>

            <div className="bg-muted/50 p-4 rounded-md my-6 border">
              <p className="text-sm">Make sure you pass in the absolute path to your server.</p>
            </div>

            <p className="mt-4">
              This tells Claude for Desktop:
            </p>
            <ul className="list-disc pl-6 my-2 space-y-2">
              <li>There's an MCP server named "weather"</li>
              <li>To launch it by running <code>uv --directory /ABSOLUTE/PATH/TO/PARENT/FOLDER/weather run weather.py</code></li>
            </ul>

            <p className="mt-4">
              Save the file, and restart Claude for Desktop.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">What's happening under the hood</h2>
            <p>
              When you ask a question:
            </p>
            <ol className="list-decimal pl-6 my-4 space-y-2">
              <li>The client sends your question to Claude</li>
              <li>Claude analyzes the available tools and decides which one(s) to use</li>
              <li>The client executes the chosen tool(s) through the MCP server</li>
              <li>The results are sent back to Claude</li>
              <li>Claude formulates a natural language response</li>
              <li>The response is displayed to you!</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quickstart;
