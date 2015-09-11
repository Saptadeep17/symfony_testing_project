<?php
// src/AppBundle/Controller/TestingController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    /**
     * @Route("/home/", name="Home page")
     */
    public function indexAction()
    {        		
		$html = $this->container->get('templating')->render('home/index.html.twig',array('displayNameList' => "Saptadeep"));

        return new Response($html);
    }
}
