export type ProjectCapacityPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectCapacityPayloadStateMachine {
  private allowedTransitions: Record<ProjectCapacityPayloadState, ProjectCapacityPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectCapacityPayloadState, to: ProjectCapacityPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectCapacityPayloadState, to: ProjectCapacityPayloadState): ProjectCapacityPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectCapacityPayload: " + from + " -> " + to);
    }
    return to;
  }
}
