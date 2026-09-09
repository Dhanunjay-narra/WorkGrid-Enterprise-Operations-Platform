export type SupportSurveysPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysPayloadStateMachine {
  private allowedTransitions: Record<SupportSurveysPayloadState, SupportSurveysPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysPayloadState, to: SupportSurveysPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysPayloadState, to: SupportSurveysPayloadState): SupportSurveysPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysPayload: " + from + " -> " + to);
    }
    return to;
  }
}
