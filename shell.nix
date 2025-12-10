{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "technical-test-env";

  buildInputs = with pkgs; [
    # Node.js 20 LTS (compatible React 19 + Fastify 5)
    nodejs_20

    # Gestionnaire de paquets
    yarn

    # SQLite pour better-sqlite3
    sqlite

    # Outils de compilation pour les modules natifs (better-sqlite3)
    python3
    gnumake
    gcc
  ] ++ lib.optionals stdenv.isDarwin [
    # Dépendances spécifiques macOS pour la compilation native
    darwin.apple_sdk.frameworks.CoreServices
    darwin.apple_sdk.frameworks.CoreFoundation
  ];

  shellHook = ''
    echo "🚀 Environnement technical-test chargé !"
  '';

  PYTHON = "${pkgs.python3}/bin/python3";
}

