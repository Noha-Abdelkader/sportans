import {
  API_Response,
  Failure_response,
  Success_response,
} from "../types/api-response";

export async function catchError<T>(
  callBack: Promise<API_Response<T>>
): Promise<[Success_response<T>, null] | [null, Failure_response]> {
  try {
    const response = await callBack;

    if (
      "error" in response ||
      "code" in response ||
      "events" in response ||
      (response.status && response.status !== 200)
    ) {
      const error: Failure_response = {
        status: response.status || 500,
        error: "error" in response ? response.error : undefined,
        code: "code" in response ? response.code : "UNKNOWN_ERROR",
        events: "events" in response ? response.events : "UNKNOWN_ERROR",
        message: "message" in response ? response.message : "UNKNOWN_ERROR",
      };

      return [null, error];
    }

    // if ("player" in response || "players" in response) {
    // return [response as Success_response<T>, null];
    // }

    return [response as Success_response<T>, null];
  } catch (error) {
    const failure: Failure_response = {
      status: 500,
      code: "UNEXPECTED_ERROR",
      error: error instanceof Error ? error.message : "Unknown error occurred",
      // message: error instanceof Error ? response.message : "UNKNOWN_ERROR",
    };
    return [null, failure];
  }
}
