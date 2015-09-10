<?php
// src/AppBundle/Controller/TestingController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TestingController extends Controller
{
    /**
     * @Route("/testing/display", name="testing page")
     */
    public function displayAction()
    {        		
		$html = $this->container->get('templating')->render('testing/display.html.twig',array('displayNameList' => "Saptadeep Bhowmik"));

        return new Response($html);
    }
}
