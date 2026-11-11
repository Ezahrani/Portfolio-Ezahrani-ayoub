<?php
// Lecture du journal de suivi, protégée par une clé (seule son empreinte SHA-256 est ici).
$hash = 'bba867ecef8510e52887366a0792ad1b4a9c873ff9740ccedf547243db4fffc5';
if (!hash_equals($hash, hash('sha256', $_GET['k'] ?? ''))) { http_response_code(404); exit; }
header('Content-Type: text/plain; charset=utf-8');
header('Cache-Control: no-store');
$f = dirname(__DIR__) . '/codefin_logs/track.tsv';
echo is_file($f) ? file_get_contents($f) : '';
