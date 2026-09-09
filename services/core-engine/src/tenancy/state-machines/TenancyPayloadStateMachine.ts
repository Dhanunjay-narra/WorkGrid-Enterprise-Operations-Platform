export type TenancyPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyPayloadStateMachine {
  private allowedTransitions: Record<TenancyPayloadState, TenancyPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyPayloadState, to: TenancyPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyPayloadState, to: TenancyPayloadState): TenancyPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyPayload: " + from + " -> " + to);
    }
    return to;
  }
}
