<?php
// Suivi simple des ouvertures de mail (e=o) et des visites du site (e=v).
// Le journal est écrit hors du dossier web, dans le répertoire de l'hébergement.
$dir = dirname(__DIR__) . '/codefin_logs';
if (!is_dir($dir)) { @mkdir($dir, 0700, true); }
$r = preg_replace('/[^a-z0-9]/', '', strtolower($_GET['r'] ?? ''));
$e = ($_GET['e'] ?? 'v') === 'o' ? 'open' : 'visit';
$p = substr(preg_replace('/[^a-zA-Z0-9\/#._-]/', '', $_GET['p'] ?? ''), 0, 80);
$ua = substr(str_replace(["\t", "\n"], ' ', $_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 160);
$ref = substr(str_replace(["\t", "\n"], ' ', $_GET['from'] ?? ''), 0, 120);
@file_put_contents($dir . '/track.tsv', implode("\t", [gmdate('c'), $e, $r, $p, $ref, $ua]) . "\n", FILE_APPEND | LOCK_EX);
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Content-Type: image/gif');
echo base64_decode('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
