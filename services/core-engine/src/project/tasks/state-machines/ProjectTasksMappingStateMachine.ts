export type ProjectTasksMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectTasksMappingStateMachine {
  private allowedTransitions: Record<ProjectTasksMappingState, ProjectTasksMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectTasksMappingState, to: ProjectTasksMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectTasksMappingState, to: ProjectTasksMappingState): ProjectTasksMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectTasksMapping: " + from + " -> " + to);
    }
    return to;
  }
}
