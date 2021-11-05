param (
    [string] $application
)

# Assumes script is ran in cdk folder

switch ($application) {

    "dev-setup" {
        # Setup environment to do development work
        python -m venv .venv
        & .\.venv\Scripts\Activate.ps1
        #python -m pip install --upgrade --trusted-host files.pythonhosted.org --trusted-host pypi.org --trusted-host pypi.python.org  -r requirements.txt
    }

    "venv" {
        & .\.venv\Scripts\Activate.ps1
    }

    "get-data" {
        Write-Host "Get data" $args
    }

    "run" {
        node app.js
    }

    default {
        Write-Host "Do nothing"
    }
}
