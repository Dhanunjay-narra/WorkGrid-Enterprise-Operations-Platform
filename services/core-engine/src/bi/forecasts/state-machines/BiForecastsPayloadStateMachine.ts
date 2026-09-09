export type BiForecastsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsPayloadStateMachine {
  private allowedTransitions: Record<BiForecastsPayloadState, BiForecastsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsPayloadState, to: BiForecastsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsPayloadState, to: BiForecastsPayloadState): BiForecastsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
