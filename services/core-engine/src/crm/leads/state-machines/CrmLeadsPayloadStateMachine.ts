export type CrmLeadsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsPayloadStateMachine {
  private allowedTransitions: Record<CrmLeadsPayloadState, CrmLeadsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsPayloadState, to: CrmLeadsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsPayloadState, to: CrmLeadsPayloadState): CrmLeadsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
