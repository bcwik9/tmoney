require 'test_helper'

class MediaControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get videos" do
    get :videos
    assert_response :success
  end

  test "should get pictures" do
    get :pictures
    assert_response :success
  end

end
