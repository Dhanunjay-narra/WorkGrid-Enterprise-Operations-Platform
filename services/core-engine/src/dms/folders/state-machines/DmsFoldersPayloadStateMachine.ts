export type DmsFoldersPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersPayloadStateMachine {
  private allowedTransitions: Record<DmsFoldersPayloadState, DmsFoldersPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersPayloadState, to: DmsFoldersPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersPayloadState, to: DmsFoldersPayloadState): DmsFoldersPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersPayload: " + from + " -> " + to);
    }
    return to;
  }
}
