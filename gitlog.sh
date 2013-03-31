#!/bin/sh
revlist=$(git rev-list -12 HEAD)
(
echo $"<!DOCTYPE html>
<html>
<head>
<title>DZ New York - Intranet ChangeLog</title>
<meta name=viewport content='width=device-width, initial-scale=1.0'>
<link rel='shortcut icon' href='/dzfavicon.png' /> 
<meta name=description content='DZ Bank NY intraNet Changlog'>
<meta name=author content='T. Killilea'>
<link href='/components/bootstrap/docs/assets/css/bootstrap.css' rel=stylesheet type='text/css' media=screen >
<style>
body {
padding-top: 60px;
padding-bottom: 40px;
} 
</style>
</head>
<body>
<div class='navbar navbar-inverse navbar-fixed-top'>
<div class="navbar-inner">
<div class="container-fluid">
<a class='btn btn-navbar' data-toggle=collapse data-target='.nav-collapse'><span
class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
</a><a class="brand" href='/'>DZ Bank-New York</a>
<div class='btn-group pull-right'>
<a class='btn dropdown-toggle' data-toggle='dropdown' href='#'><i class="icon-user">
</i> User <span class="caret"></span></a>
<ul class="dropdown-menu">
<li><a id=username href=# >My Profile</a></li>
<li class="divider"></li>
<li><a href='/logout.aspx'>Sign Out</a></li>
</ul>
</div>
<div class="nav-collapse">
<ul class="nav">
<li><a href=/ >Home</a></li>
</ul>
</div>
</div>
</div>
</div>"
echo "<div class="container">
<div class="hero-unit"><h2>DZ New York <small>Intranet website software change log history</small></h2><p>GIT - <abbr title='Distributed Version Control System'>DVCS: </abbr> Commit-log/Version control reporting.</p></div>"
parent=HEAD
for rev in $revlist
do
files=$(git log -1 --pretty=format: --name-only $rev)
#files2=$(git log -1 --pretty=format: --name-status $rev)
echo " <div class='row'>"
echo " <div class='span12'>"
echo " $(git log -1 --pretty="<h4><span class="text-info">Revision-Subject: %s</span></h4>" $rev)"
echo " <div class="row">"
echo " $(git log -1 --pretty="<div class="span6"><strong>Author: %an</strong></div><div class="span6"><strong>Email: %ae</strong></div>" $rev)"
echo " </div>"
echo " <div class="row">"
echo " $(git log -1 --pretty="<div class="span12"><strong>Date: %ad</strong></div>" $rev)"
echo " </div>"
echo " <div class="row">"
echo " $(git log -1 --pretty="<div class="span12"><strong>Description: </strong>%b</div>" $rev)"
echo " </div>"
echo " <div class="row">"
echo " <div class="span12"><p>STATISTICS</p></div>"
echo " </div>"
echo " <div class="row">
<div class="span12">
<strong>List of modified files:</strong>
<ul class="unstyled">"
for file in $files
do
filediff=$(git diff $parent^ $rev -- $file)
echo " <li>$file<div>$filediff</div></li>"
done
echo " </ul><br/></div>"
echo " </div>"
#comstats=$(git diff $parent..$rev)
echo " <div class="row">"
echo " <div class="span12"><p>committ stats</p></div>"
echo " </div>"
echo " </div>"
echo " </div>"
parent=$rev
done
echo "</div>"
echo "<script src='http://code.jquery.com/jquery.js'></script>"
echo "<script src='/components/bootstrap/docs/assets/js/bootstrap.min.js'></script>"
echo "</body>"
echo "</html>"
) >public/changelog.html