export type CrmDealsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsPayloadStateMachine {
  private allowedTransitions: Record<CrmDealsPayloadState, CrmDealsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsPayloadState, to: CrmDealsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsPayloadState, to: CrmDealsPayloadState): CrmDealsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
