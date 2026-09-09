export type ProjectEpicsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectEpicsPayloadStateMachine {
  private allowedTransitions: Record<ProjectEpicsPayloadState, ProjectEpicsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectEpicsPayloadState, to: ProjectEpicsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectEpicsPayloadState, to: ProjectEpicsPayloadState): ProjectEpicsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectEpicsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
